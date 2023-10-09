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
            혹시 기존에 등록하셨던 기기인가요?
          </h1>
          <p className="text-sm">현재 기기가 아래 기기 중 하나인 경우만 선택해주세요!</p>
        </div>
        <Link href="?" className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </Link>
      </section>
      <section className="px-4">
        <ul className="flex flex-col gap-1">
          {
            data.map((e) => (
              <li
                key={e.id}
                onClick={() => setChecked(e)}
              >
                <div className={`flex items-center gap-2 p-3 border rounded-md ${checked.id === e.id ? 'bg-[#FFF4D3] border-main border-2' : ''}`}>
                  <div className="rounded-full border-[#FFF1C7] border-4 bg-[#FFE69B] w-8 h-8 flex justify-center">
                    <Image src="/images/credit_card_refresh.svg" width={15} height={15} alt="card" />
                  </div>
                  <div className="flex justify-between text-sm grow text-letter">
                    <div>
                      <h2>{e.name}</h2>
                      <p>{e.type}</p>
                    </div>
                    <div>
                      {
                        checked.id === e.id
                          ? <Image src="/images/checkbox_checked.svg" width={15} height={15} alt="card" />
                          : <Image src="/images/checkbox.svg" width={15} height={15} alt="card" />
                      }
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
      <section className="grid grid-cols-2 gap-2 p-4 font-semibold">
        <Link href="?modal=add" className="p-2 text-xs bg-white border rounded-md">
          아니요, 새 기기로 등록할래요
        </Link>
        <button type="button" className="btn-primary lg:text-xs">
          네, 이 기존 기기로 등록할래요.
        </button>
      </section>
    </>
  );
}
