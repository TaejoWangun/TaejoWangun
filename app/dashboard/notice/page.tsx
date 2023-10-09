'use client';

import { useState } from 'react';

async function toWAV(blob: Blob): Promise<Blob> {
  return new Promise<Blob>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const audioContext = new AudioContext();

      // Decode the audio data
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;

      // Create a destination node to convert the audio to WAV
      const dest = audioContext.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(dest.stream);

      source.connect(dest);

      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const wavBlob = new Blob(chunks, { type: 'audio/wav' });
        resolve(wavBlob);
      };

      mediaRecorder.start();
      source.start();

      setTimeout(() => {
        mediaRecorder.stop();
        source.stop();
      }, audioBuffer.duration * 1000);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(blob);
  });
}
// function get5PerMin(wav: number) {
//   return 26000;
// }

// // server 요청
// function sendNoti() {

// }

export default function Notice() {
  const [ticks, setTicks] = useState<number[]>([]);

  async function record() {
    console.log('record start');
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = async (event) => {
      const blob = event.data;
      const wav = await toWAV(blob);
      console.log('wav:', wav);
      // const tick = get5PerMin(wav);

      // setTicks([...ticks, tick]);
      // const isCheck = tick > 25000;
      // if (isCheck) {
      //   sendNoti();
      // }
    };
    mediaRecorder.start(1000);
  }
  return (
    <p>
      <button onClick={record} type="button">
        감지 시작
      </button>
      graph
    </p>
  );
}
