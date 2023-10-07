import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ModalProps {
  closeModal: () => void;
  text: string;
}

export default function Modal({ closeModal, text }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className="z-[9999] fixed flex justify-center items-center bg-[rgb(52,64,84,0.7)] top-0 bottom-0 right-0 left-0">
      <div
        ref={modalRef}
        className="w-64 sm:w-96 rounded-xl border absolute bg-white p-4 sm:p-6"
      >
        <div className="flex justify-between items-start mb-2 sm:mb-4">
          <Image
            src="/images/exclamation_mark.svg"
            alt="느낌표 이미지"
            width={32}
            height={32}
            className="sm:w-12 sm:h-12"
          />
          <button type="button" onClick={closeModal}>
            <Image
              src="/images/close.svg"
              alt="닫기 이미지"
              width={18}
              height={18}
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>
        <h1 className="font-semibold text-base sm:text-lg mb-5 sm:mb-8">
          {text}
        </h1>
        <button
          type="button"
          onClick={closeModal}
          className="bg-[#FFC000] w-full h-8 sm:h-11 rounded-lg"
          autoFocus
        >
          확인
        </button>
      </div>
    </div>
  );
}
