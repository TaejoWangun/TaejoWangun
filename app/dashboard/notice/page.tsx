'use client';

import { useState } from 'react';
import { get5PerMin, toWAV } from './kihang';

// // server 요청
function sendNoti() {

}

export default function Notice() {
  const [ticks, setTicks] = useState<number[]>([]);

  async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = async (event) => {
      const blob = event.data;
      const wav = await toWAV(blob);
      const tick = get5PerMin(wav);

      setTicks([...ticks, tick]);
      const isCheck = tick > 25000;
      if (isCheck) {
        sendNoti();
      }
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
