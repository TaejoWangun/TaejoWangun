'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import Modal from '../components/Modal';

export default function SignIn() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <>
      {modalOpen && (
        <Modal toggleModal={toggleModal} text="존재하지 않는 유저입니다." />
      )}

      <h1 className="text-xl sm:text-3xl font-medium mt-2 mb-8">로그인</h1>

      <form className="flex flex-col">
        <input
          type="text"
          placeholder="이메일 또는 아이디"
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
        />
        <div className="relative mt-4 sm:mt-6">
          <input
            type="password"
            placeholder="비밀번호"
            className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
          />
          <button type="button" className="absolute top-3 sm:top-5 right-4">
            <Image
              src="/images/eye_closed.svg"
              alt="감은눈 이미지"
              width={16}
              height={16}
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>

        <Link
          href="find-password"
          className="mt-2 ml-auto underline text-xs sm:text-base"
        >
          아이디/비밀번호 찾기
        </Link>

        <label htmlFor="checkbox" className="ml-2 mb-6 text-xs sm:text-base">
          <input type="checkbox" id="checkbox" className="mr-2 " />
          아이디 기억하기
        </label>

        <button
          type="submit"
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 bg-[#FFC000] rounded-full font-medium text-sm sm:text-xl mb-6 sm:mb-10"
        >
          로그인
        </button>
      </form>

      <span className="font-medium text-sm sm:text-xl pt-6 sm:pt-10 mb-4 border-t w-[300px] sm:w-[580px] text-center">
        계정이 없으신가요?
      </span>
      <Link
        href="signup"
        className="w-[300px] sm:w-[580px] h-10 sm:h-1 rounded-full font-medium text-sm sm:text-xl mb-10 border border-black text-center leading-10 sm:leading-[60px]"
      >
        회원가입
      </Link>
    </>
  );
}
