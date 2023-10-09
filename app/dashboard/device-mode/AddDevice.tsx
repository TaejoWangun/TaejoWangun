'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Data = {
  id: number
  name: string
  type: string
};

const data: Data[] = [
  {
    id: 0,
    name: 'Hansung PC',
    type: '컴퓨터',
  },
  {
    id: 1,
    name: '중고 아이폰',
    type: '핸드폰',
  },
  {
    id: 2,
    name: '우리 집 공용 패드',
    type: '태블릿',
  },
];

export default function Modal() {
  const [checked, setChecked] = useState<Data>(data[0]);

  return (
    <>
      <section className="flex items-start justify-between p-4 rounded-t">
        <div>
          <div className="w-8 h-8 p-2 border rounded-md">
            <Image src="/images/credit_card_refresh.svg" width={15} height={15} alt="card" />
          </div>
          <h1 className="pt-2 text-lg font-semibold text-gray-900">
            기기 등록
          </h1>
          <p className="text-sm">기기 정보를 작성해주세요.</p>
        </div>
        <Link href="?" className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </Link>
      </section>
      <section className="px-4">
        <label>
          <span className="block text-sm">
            기기 이름
          </span>
          <input className="border rounded-lg w-full px-3 py-2" />
        </label>
        <label>
          <span className="block text-sm">
            기기 타입
          </span>
          <input className="border rounded-lg w-full px-3 py-2" />
        </label>
        <label>
          <span className="block text-sm">
            기기 모드
          </span>
          <input className="border rounded-lg w-full px-3 py-2" />
        </label>
      </section>
      <section className="grid grid-cols-2 gap-2 p-4 font-semibold">
        <Link href="?modal=add" className="p-2 text-xs bg-white border rounded-md">
          등록
        </Link>
        <Link href="?" className="btn-primary lg:text-xs">
          취소
        </Link>
      </section>
    </>
  );
}
