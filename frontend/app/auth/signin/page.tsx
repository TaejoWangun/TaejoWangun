'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { signIn } from '../../api/auth/auth';

export default function SignIn() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const closeModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const onChangeUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (password.length < 8 || password.length > 20) {
        setModalText('비밀번호는 8~20 자리만 가능합니다.');
      } else {
        signIn(userName, password);
      }
    },
    [userName, password],
  );

  return (
    <>
      {modalOpen && <Modal closeModal={closeModal} text={modalText} />}

      <Header text="로그인" />
      <Description text="" />

      <form className="flex flex-col" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="이메일 또는 아이디"
          value={userName}
          onChange={onChangeUserName}
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
        />
        <div className="relative mt-4 sm:mt-6">
          <input
            type={isVisible ? 'text' : 'password'}
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
            minLength={8}
            maxLength={20}
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
          <input
            type="checkbox"
            id="checkbox"
            className="mr-2 align-text-top"
          />
          아이디 기억하기
        </label>

        <Button text="로그인" />
      </form>

      <span className="font-medium text-sm sm:text-xl pt-6 sm:pt-10 mb-4 border-t w-[300px] sm:w-[580px] text-center">
        계정이 없으신가요?
      </span>
      <Link
        href="signup"
        className="w-[300px] sm:w-[580px] h-10 sm:h-16 rounded-full font-medium text-sm sm:text-xl mb-10 border border-black text-center leading-10 sm:leading-[60px]"
      >
        회원가입
      </Link>
    </>
  );
}
