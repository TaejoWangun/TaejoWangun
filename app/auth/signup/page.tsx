'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { signUp } from '../../api/auth/auth';
import validate from '../../lib/auth/validation';

export default function SignUp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCh, setIsVisibleCh] = useState(false);
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCh, setPasswordCh] = useState('');
  const router = useRouter();

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const toggleVisibilityCh = useCallback(() => {
    setIsVisibleCh(!isVisibleCh);
  }, [isVisibleCh]);

  const onChangeUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(e.target.value);
    },
    [],
  );

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [],
  );

  const onChangePasswordCh = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCh(e.target.value);
    },
    [],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (password !== passwordCh) {
        setModalText('비밀번호가 일치하지 않습니다.');
        setModalOpen(true);
        setPasswordCh('');
      } else if (!validate(password)) {
        setModalText('비밀번호는 문자, 숫자, 특수문자를 반드시 포함해야 합니다.');
        setModalOpen(true);
        setPassword('');
        setPasswordCh('');
      } else {
        signUp(userId, email, password)
          .then((ressponse) => {
            console.log(ressponse);
            router.push('/auth/signin');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [userId, email, password, passwordCh, router],
  );

  return (
    <>
      {modalOpen && <Modal closeModal={closeModal} text={modalText} />}

      <Header text="회원가입" />

      <h2 className="text-xs sm:text-base mb-6 sm:mb-10 flex">
        이미 계정이 있으신가요? &nbsp;
        <Link href="signin" className="text-[#666666]">
          로그인
        </Link>
      </h2>

      <form className="flex flex-col mb-10 gap-4 sm:gap-6 " onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={onChangeUserId}
          required
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmail}
          required
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
        />
        <div className="relative ">
          <input
            type={isVisible ? 'text' : 'password'}
            placeholder="비밀번호(문자,숫자,특수문자 포함 8~20자)"
            value={password}
            onChange={onChangePassword}
            required
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

        <div className="relative ">
          <input
            type={isVisibleCh ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            value={passwordCh}
            onChange={onChangePasswordCh}
            required
            className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
            minLength={8}
            maxLength={20}
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
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>

        <Button text="계정 등록" />
      </form>
    </>
  );
}
