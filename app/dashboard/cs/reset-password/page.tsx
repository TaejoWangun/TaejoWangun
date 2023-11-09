'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

export default function ResetPassword() {
  const [isVisibleCur, setIsVisibleCur] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [isVisibleCh, setIsVisibleCh] = useState(false);

  const toggleVisibilityCur = useCallback(() => {
    setIsVisibleCur(!isVisibleCur);
  }, [isVisibleCur]);

  const toggleVisibilityNew = useCallback(() => {
    setIsVisibleNew(!isVisibleNew);
  }, [isVisibleNew]);

  const toggleVisibilityCh = useCallback(() => {
    setIsVisibleCh(!isVisibleCh);
  }, [isVisibleCh]);

  return (
    <div className="flex sm:w-full min-w-[400px] mx-20 shadow-[0px_0px_15px_-5px_rgba(0,0,0,0.3)] mt-[160px]  flex-col items-center py-6 px-8 rounded-xl">
      <h1 className="border-b  min-w-[350px] text-center text-[#006877] font-bold text-lg pb-6 mb-4">비밀번호 변경</h1>

      <form className="w-full text-sm">
        <div className="relative flex items-center justify-between mb-6">
          <div>
            현재 비밀번호
          </div>

          <input className="px-2 py-1 border rounded-md" type={isVisibleCur ? 'text' : 'password'} />
          <button
            type="button"
            className={
              isVisibleCur
                ? 'absolute top-2.5 sm:top-5 right-4'
                : 'absolute top-2 sm:top-5 right-4'
            }
            onClick={toggleVisibilityCur}
          >
            <Image
              src={
                isVisibleCur ? '/images/eye_open.svg' : '/images/eye_closed.svg'
              }
              alt={isVisibleCur ? '뜬눈 이미지' : '감은눈 이미지'}
              width={16}
              height={16}
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>

        <div className="relative flex items-center justify-between mb-6">
          <div>
            새 비밀번호
          </div>

          <input className="px-2 py-1 border rounded-md" type={isVisibleNew ? 'text' : 'password'} />
          <button
            type="button"
            className={
              isVisibleNew
                ? 'absolute top-2.5 sm:top-5 right-4'
                : 'absolute top-2 sm:top-5 right-4'
            }
            onClick={toggleVisibilityNew}
          >
            <Image
              src={
                isVisibleNew ? '/images/eye_open.svg' : '/images/eye_closed.svg'
              }
              alt={isVisibleNew ? '뜬눈 이미지' : '감은눈 이미지'}
              width={16}
              height={16}
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>

        <div className="relative flex items-center justify-between mb-6">
          <div>
            새 비밀번호 확인
          </div>

          <input className="px-2 py-1 border rounded-md" type={isVisibleCh ? 'text' : 'password'} />
          <button
            type="button"
            className={
              isVisibleCh
                ? 'absolute top-2.5 sm:top-5 right-4'
                : 'absolute top-2 sm:top-5 right-4'
            }
            onClick={toggleVisibilityCh}
          >
            <Image
              src={
                isVisibleCh ? '/images/eye_open.svg' : '/images/eye_closed.svg'
              }
              alt={isVisibleCh ? '뜬눈 이미지' : '감은눈 이미지'}
              width={16}
              height={16}
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>

        <button type="submit" className="w-full h-10 bg-[#FFC000] py-2 rounded-md mb-4">확인</button>
        <button type="button" className="w-full h-10 py-2 border border-black rounded-md">취소</button>
      </form>
    </div>
  );
}
