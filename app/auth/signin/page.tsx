'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { signIn } from '../../api/auth/auth';
import OAuthButton from '../components/OAuthButton';

export default function SignIn() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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

      if (password.length <= 20) {
        signIn(userName, password)
          .then((response) => {
            if (response.status === 201) {
              router.push('/');
            } else {
              setModalText('이메일 또는 비밀번호를 다시 확인해주세요.');
              setModalOpen(true);
              setUserName('');
              setPassword('');
            }
          })
          .catch((error) => {
            setModalText(error);
            setModalOpen(true);
            setUserName('');
            setPassword('');
          });
      } else {
        setModalText('');
      }
    },
    [userName, password, router],
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
          className="mt-2 ml-auto text-xs underline sm:text-base"
        >
          아이디/비밀번호 찾기
        </Link>

        <label htmlFor="checkbox" className="mb-6 ml-2 text-xs sm:text-base">
          <input
            type="checkbox"
            id="checkbox"
            className="mr-2 align-text-top"
          />
          아이디 기억하기
        </label>

        <Button text="로그인" />

      </form>

      <div className="border-t w-[300px] sm:w-[580px] mb-2 sm:mb-4 pt-6 sm:pt-10">
        <OAuthButton text="구글로 로그인" logo="/images/google_logo.svg" address="googlelogin" alt="구글 로고 이미지" />
        <OAuthButton text="카카오로 로그인" logo="/images/kakao_logo.svg" address="kakaologin" alt="카카오 로고 이미지" />
        <OAuthButton text="네이버로 로그인" logo="/images/naver_logo.svg" address="naverlogin" alt="네이버 로고 이미지" />
      </div>

      <span className="font-medium text-sm sm:text-xl pt-6 sm:pt-10 mb-4 border-t w-[300px] sm:w-[580px] text-center">
        계정이 없으신가요?
      </span>
      <Link
        href="signup"
        className="w-[300px] sm:w-[580px] h-10 sm:h-16 rounded-full font-medium text-sm sm:text-xl border mb-10 border-black text-center leading-10 sm:leading-[60px]"
      >
        회원가입
      </Link>
    </>
  );
}
