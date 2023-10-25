'use client';

import React, { useEffect, useState, useRef } from 'react';
import Recorder from './recorder';

let db: IDBDatabase;

const initDB = () => {
  const request = indexedDB.open('audioDB', 1);
  request.onupgradeneeded = function (event) {
    console.log('Upgrading database...');
    db = (event.target as IDBRequest).result;
    db.createObjectStore('audio', {
      keyPath: 'id',
      autoIncrement: true,
    });
    db.createObjectStore('rmsValues', { autoIncrement: true }); // New object store for RMS values
  };

  request.onsuccess = function (event) {
    console.log('Database initialized successfully');

    db = (event.target as IDBRequest).result;
  };

  request.onerror = function (event) {
    console.log('Error opening IndexedDB', event);
  };
};
interface Recording {
  audioBlob: Blob;
  // ... other properties
}

function AudioRecorder() {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const recordingsListRef = useRef(null);
  const [recording, setRecording] = useState(false);
  //   const [recordingInterval, setRecordingInterval] = useState<number | null>(
  //     null
  //   );
  //   const [pauseInterval, setPauseInterval] = useState<number | null>(null);

  const [recordingInterval, setRecordingInterval] = useState<NodeJS.Timeout | null>(null);
  const [pauseInterval, setPauseInterval] = useState<NodeJS.Timeout | null>(
    null,
  );

  const [gumStream, setGumStream] = useState<MediaStream | null>(null);
  const [rec, setRec] = useState<Recorder | null>(null);
  const [input, setInput] = useState<MediaStreamAudioSourceNode | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const recRef = useRef<Recorder | null>(null);
  const gumStreamRef = useRef<MediaStream | null>(null);
  // const recordingsListRef = useRef<HTMLDivElement | null>(null);

  // For DB initialization, runs only once after the first render
  useEffect(() => {
    initDB();
  }, []);

  // For managing intervals, runs every time recordingInterval or pauseInterval changes
  useEffect(() => () => {
    if (recordingInterval) clearInterval(recordingInterval);
    if (pauseInterval) clearInterval(pauseInterval);
  }, [recordingInterval, pauseInterval]);

  const startRecording = async () => {
    const constraints = { audio: true, video: false };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        console.log(
          'getUserMedia() success, stream created, initializing Recorder.js ...',
        );

        // Create a new AudioContext
        const newAudioContext = new AudioContext();

        // Update the state variables using their setter functions
        setAudioContext(newAudioContext);
        setGumStream(stream);

        // Use the local newAudioContext variable here
        const newInput = newAudioContext.createMediaStreamSource(stream);
        setInput(newInput);

        const newRec = new Recorder(newInput, { numChannels: 1 });

        // Use ref to hold the Recorder instance
        recRef.current = newRec;

        // Use ref to hold the MediaStream
        gumStreamRef.current = stream;

        // Start the recording process
        newRec.record();

        console.log('Recording started');
      })
      .catch((err) => {
        console.error('Error in getUserMedia: ', err);
      });

    setRecording(true);
  };

  const stopRecording = () => {
    if (recRef.current && gumStreamRef.current) {
      recRef.current.stop();

      // Stop microphone access
      const audioTracks = gumStreamRef.current.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].stop();
      }

      // Get the buffer data instead of exporting as WAV
      recRef.current.getBuffer(displayBufferLength);

      // After checking RMS, export to WAV
      recRef.current.exportWAV(createDownloadLink);
      fetchAndSendRMSValues();

      // ... (same as your stopRecording function)
      setRecording(false);
    } else {
      console.warn('Recorder or MediaStream not initialized.');
    }
  };

  const pauseRecording = () => {
    if (rec?.recording) {
      rec.stop();
    } else {
      rec?.record();
    }
  };

  const createDownloadLink = async (blob: Blob) => {
    try {
      const transaction = db.transaction(['audio'], 'readwrite');
      const objectStore = transaction.objectStore('audio');
      const request = objectStore.add({ audioBlob: blob });

      request.onsuccess = async () => {
        const getAllRequest = objectStore.getAll();
        getAllRequest.onsuccess = (event) => {
          const allRecords = (event.target as IDBRequest).result;
          if (allRecords.length > 3) {
            const excessRecords = allRecords.length - 3;
            for (let i = 0; i < excessRecords; i++) {
              objectStore.delete(allRecords[i].id);
            }
          }

          // Update the state to re-render the component
          setRecordings(allRecords);
        };
      };
    } catch (error) {
      console.error('Error in createDownloadLink:', error);
    }
  };

  const displayBufferLength = (buffers: Float32Array[]) => {
    // Assuming you're recording in mono, so only one channel is present
    const leftChannelData = buffers[0];

    // Calculate the RMS of the PCM data
    const rms = calculateRMS(leftChannelData);

    // Check if the RMS is above a certain threshold
    const threshold = 0.005; // This value can be adjusted based on your specific needs
    if (rms > threshold) {
      console.log('Distinct sound or noise detected.');
    } else {
      console.log('No distinct sound or noise detected.');
    }
    console.log(rms);

    // Save RMS value to indexedDB
    const request = indexedDB.open('audioDB', 1);
    request.onsuccess = (event: Event) => {
      const db = (event.target as IDBRequest).result;
      const transaction = db.transaction(['rmsValues'], 'readwrite');
      const objectStore = transaction.objectStore('rmsValues');
      objectStore.add(rms);
    };
  };

  // Assuming calculateRMS is something like this:
  const calculateRMS = (data: Float32Array) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i] * data[i];
    }
    const rms = Math.sqrt(sum / data.length);
    return parseFloat(rms.toFixed(5));
  };

  const clearRMSValues = () => {
    const request = indexedDB.open('audioDB', 1);
    request.onsuccess = (event: Event) => {
      const db = (event.target as IDBRequest).result;
      const transaction = db.transaction(['rmsValues'], 'readwrite');
      const objectStore = transaction.objectStore('rmsValues');
      objectStore.clear();
    };
  };

  const startCyclicalRecording = () => {
    // Clear the RMS values from IndexedDB
    // clearRMSValues();
    startRecording();
    const newRecordingInterval = setTimeout(() => {
      stopRecording();
      const newPauseInterval = setTimeout(startCyclicalRecording, 1000);
      setPauseInterval(newPauseInterval);
    }, 5000);
    setRecordingInterval(newRecordingInterval);
  };

  const stopCyclicalRecording = () => {
    if (recordingInterval) clearTimeout(recordingInterval);
    if (pauseInterval) clearTimeout(pauseInterval);
    stopRecording();
  };

  const fetchAndSendRMSValues = () => {
    // Create a transaction
    const transaction = db.transaction(['rmsValues'], 'readonly');

    // Create an object store handle
    const objectStore = transaction.objectStore('rmsValues');

    // Create a request to get all records from the object store
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = (event: Event) => {
      const allRMSValues = (event.target as IDBRequest).result;

      console.log(allRMSValues);
      // Now you can send this data to the server
      // sendRMSValuesToServer(allRMSValues);
    };

    getAllRequest.onerror = (event: Event) => {
      console.log('Failed to retrieve data from IndexedDB:', event);
    };
  };
  const handleStartClick = () => {
    clearRMSValues(); // Clear the RMS values
    startCyclicalRecording(); // Start the cyclical recording
  };

  return (
    <div>
      <button type="button" onClick={handleStartClick} disabled={recording}>
        Start
      </button>
      <button type="button" onClick={stopCyclicalRecording} disabled={!recording}>
        Stop
      </button>
      <button type="button" onClick={pauseRecording} disabled={!recording}>
        Pause
      </button>
      <ul ref={recordingsListRef}>
        {recordings.map(({ audioBlob }) => {
          const url = URL.createObjectURL(audioBlob);
          return (
            <li key={url}>
              <audio controls src={url}>
                <track kind="captions" />
              </audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AudioRecorder;
