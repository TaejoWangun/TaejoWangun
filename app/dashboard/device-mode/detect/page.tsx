'use client';

import Chart from 'chart.js/auto';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import useKihang from '../../notice/useKihang';

type RecordingInfo = {
  data: Blob
  point: number
};

export default function Notice() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const [recordingInfo, setRecordingInfo] = useState<RecordingInfo[]>([]);

  const [chart, setChart] = useState<Chart<'line', number[], string> | null>(null);

  function addRecordingInfo(e: RecordingInfo) {
    console.log(chart);
    if (chart) {
      chart.data.datasets[0].data.push(e.point);
      chart.update();
    }
    setRecordingInfo([...recordingInfo, e]);
  }

  const {
    recordingsListRef,
    recordings,
    handleStartClick,
    handleStopClick,
    handlePauseClick,
  } = useKihang(addRecordingInfo);

  useEffect(() => {
    if (chartRef.current === null) return () => {};
    Chart.register();
    const ctx = chartRef.current;
    // eslint-disable-next-line no-new
    const aChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:30'],
        datasets: [
          {
            label: '데시벨 그래프',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
          }, {
            data: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
            borderColor: 'red',
            borderWidth: 1.5,
            pointStyle: false,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    setChart(aChart);
    return () => {
      aChart.destroy();
    };
  }, []);

  return (
    <div className="p-3 sm:p-7 grow">
      <section className="pt-5">
        <div className="flex justify-between">
          <p className="text-lg font-bold text-letter sm:text-lg">
            현재
            {' '}
            <span>감지 모드</span>
            입니다.
          </p>
          <div className="shrink-0">
            <Link href="?modal=list" className="px-2 py-2 text-xs font-bold rounded sm:px-3 sm:text-lg bg-letter text-main">
              모드 변경
            </Link>
          </div>
        </div>
      </section>
      <section>
        <button type="button" className="px-2 py-2 text-xs font-bold rounded sm:px-3 sm:text-lg bg-letter text-main" onClick={handleStartClick}>Record</button>
      </section>
      <section className="grid grid-cols-2 pt-5">
        <div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-400 border rounded-md">
              <div className="relative w-5 h-5">
                <Image src="/images/checkmark.svg" alt="card" fill />
              </div>
            </div>
            <h2 className="text-base">알림 횟수</h2>
          </div>
          <div className="pt-3">
            <p className="text-xl font-semibold">2</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-700 border rounded-md">
              <div className="relative w-5 h-5">
                <Image src="/images/stopwatch.svg" alt="card" fill />
              </div>
            </div>
            <h2 className="text-base">가동 시간</h2>
          </div>
          <div className="pt-3 tracking-wider">
            <span className="text-xl font-semibold">2</span>
            <span className="text-xs font-semibold text-[rgba(7,4,23,0.40)]">h</span>
            <span className="text-xl font-semibold">06</span>
            <span className="text-xs font-semibold text-[rgba(7,4,23,0.40)]">m</span>
          </div>
        </div>
      </section>
      <section className="sm:pt-6">
        <div>
          <ul className="sm:flex gap-4">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400" />
              <span className="underline text-purple-600">
                Hansung_PC
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-300" />
              <span className="">
                MACPro14
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400" />
              <span className="">
                LG-GREM
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <canvas ref={chartRef} />
      </section>
    </div>
  );
}
