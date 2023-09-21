'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';

export default function FindPassword() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCh, setIsVisibleCh] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const toggleVisibilityCh = useCallback(() => {
    setIsVisibleCh(!isVisibleCh);
  }, [isVisibleCh]);

  return (
    <>
      <Header text="비밀번호 재설정" />
      <Description text="계정에 로그인하고 모든 기능에 접근할 수 있도록 새 비밀번호를 설정해주세요." />
      <form className="flex flex-col">
        <div className="mb-1 text-xs sm:text-sm ml-1 text-[#2F4858] ">
          새 비밀번호 입력
        </div>
        <div className="mb-4 flex  relative">
          <input
            className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
            type={isVisible ? 'text' : 'password'}
            placeholder="문자, 숫자, 특수문자 포함 8~24자"
          />
          <button
            type="button"
            className={
              isVisible
                ? 'absolute top-3.5 sm:top-5 right-4'
                : 'absolute top-3 sm:top-5 right-4'
            }
            onClick={toggleVisibility}
          >
            <Image
              src={
                isVisible ? '/images/eye_open.svg' : '/images/eye_closed.svg'
              }
              alt={isVisible ? '뜬눈 이미지' : '감은눈 이미지'}
              width={16}
              height={16}
              className="sm:w-[24px] sm:h-[24px]"
            />
          </button>
        </div>

        <div className="mb-1 text-xs sm:text-sm ml-1 text-[#2F4858] ">
          비밀번호 확인
        </div>
        <div className="mb-6 flex relative">
          <input
            className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
            type={isVisibleCh ? 'text' : 'password'}
            placeholder="문자, 숫자, 특수문자 포함 8~24자"
          />
          <button
            type="button"
            className={
              isVisibleCh
                ? 'absolute top-3.5 sm:top-5 right-4'
                : 'absolute top-3 sm:top-5 right-4'
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
              className="sm:w-[24px] sm:h-[24px]"
            />
          </button>
        </div>

        <Button text="비밀번호 업데이트" />
      </form>
    </>
  );
}
