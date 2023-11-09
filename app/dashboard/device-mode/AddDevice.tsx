/* eslint-disable no-console */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getToken, onMessage } from 'firebase/messaging';
import messaging from '../../firbase';

export default function Modal() {
  const handleNoticeTestClick = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return;

    const token = await getToken(messaging, { vapidKey: 'BP5aO-r-dkFChjFT2JkmI-D2eR-6pXd2mRejAz93_GSkmVxsoRlYhW-QbwgI9HXh23lvPnSh-ZGbSu_rwisHMEo' });
    if (token) {
      // 정상적으로 토큰이 발급되면 콘솔에 출력합니다.
      console.log('issue token');
      console.log(token);
    } else {
      console.log('no token');
    }

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });
  };

  return (
    <>
      <section className="flex items-start justify-between p-4 rounded-t">
        <div>
          <div className="flex items-center justify-center w-12 h-12 border rounded-md">
            <div className="relative w-6 h-6 grow">
              <Image src="/images/flag.svg" alt="card" fill />
            </div>
          </div>
          <h1 className="pt-4 text-lg font-semibold text-gray-900">
            기기 등록
          </h1>
          <p className="text-sm text-gray-700">기기 정보를 작성해주세요.</p>
        </div>
        <Link href="?" className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </Link>
      </section>
      <section className="px-4 grid gap-4">
        <label>
          <span className="block text-sm text-gray-700">
            기기 이름*
          </span>
          <input className="w-full px-3 py-2 font-medium text-gray-900 border rounded-lg" />
        </label>
        <label>
          <span className="block text-sm text-gray-700">
            기기 타입
          </span>
          <select className="w-full px-3 py-2 font-medium text-gray-900 border rounded-lg">
            <option>컴퓨터</option>
          </select>
        </label>
        <label>
          <span className="block text-sm text-gray-700">
            기기 모드
          </span>
          <select className="w-full px-3 py-2 font-medium text-gray-900 border rounded-lg">
            <option>알림 모드</option>
          </select>
        </label>
      </section>
      <section className="p-4 pt-8 font-semibold grid gap-2">
        <button type="button" onClick={handleNoticeTestClick} className="px-1 py-2 text-base font-bold text-center rounded bg-main sm:px-3 text-letter">
          알림
        </button>
        <Link href="/dashboard/device-mode/notice" className="px-1 py-2 text-base font-bold text-center rounded bg-main sm:px-3 text-letter">
          등록
        </Link>
        <Link href="?" className="p-2 text-base text-center text-gray-700 bg-white border rounded-md">
          취소
        </Link>
      </section>
    </>
  );
}
