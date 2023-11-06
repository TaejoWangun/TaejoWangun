'use client';

import { useEffect, useState } from 'react';
import useKihang from './useKihang';

type RecordingInfo = {
  data: Blob
  point: number
};

function AudioRecorder() {
  const [recordingInfo, setRecordingInfo] = useState<RecordingInfo[]>([]);

  function addRecordingInfo(e: RecordingInfo) {
    setRecordingInfo([...recordingInfo, e]);
  }

  useEffect(() => {
    console.log(recordingInfo);
  }, [recordingInfo]);
  const {
    recordingsListRef,
    recordings,
    handleStartClick,
    handleStopClick,
    handlePauseClick,
  } = useKihang(addRecordingInfo);

  return (
    <div>
      <button type="button" onClick={handleStartClick}>
        Start
      </button>
      <button type="button" onClick={handleStopClick}>
        Stop
      </button>
      <button type="button" onClick={handlePauseClick}>
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
