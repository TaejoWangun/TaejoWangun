'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import Modal from '../components/Modal';

export default function SignUp() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <>
      {modalOpen && (
        <Modal toggleModal={toggleModal} text="이미 존재하는 아이디입니다." />
      )}

      <h1 className="text-xl sm:text-3xl font-medium mt-2 mb-1">회원가입</h1>

      <h2 className="text-xs sm:text-base mb-6 sm:mb-10 flex">
        이미 계정이 있으신가요? &nbsp;
        <Link href="signin" className="text-[#666666]">
          로그인
        </Link>
      </h2>

      <form className="flex flex-col mb-10 gap-6 sm:gap-10">
        <input
          type="text"
          placeholder="아이디"
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
        />
        <div className="relative ">
          <input
            type="password"
            placeholder="비밀번호(문자,숫자,특수문자 포함 8~20자)"
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

        <button
          type="submit"
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 bg-[#FFC000] rounded-full font-medium text-sm sm:text-xl"
        >
          계정 등록
        </button>
      </form>
    </>
  );
}
