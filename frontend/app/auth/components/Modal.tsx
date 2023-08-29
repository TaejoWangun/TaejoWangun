import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ModalProps {
  toggleModal: () => void;
  text: string;
}

export default function Modal({ toggleModal, text }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        toggleModal();
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
        className="w-64 sm:w-96 rounded-xl border absolute bg-white p-6"
      >
        <div className="flex justify-between items-start mb-4">
          <Image
            src="/images/exclamation_mark.svg"
            alt="느낌표 이미지"
            width={48}
            height={48}
          />
          <button type="button" onClick={toggleModal}>
            <Image
              src="/images/close.svg"
              alt="닫기 이미지"
              width={24}
              height={24}
            />
          </button>
        </div>
        <h1 className="font-semibold text-lg mb-8">{text}</h1>
        <button
          type="button"
          onClick={toggleModal}
          className="bg-[#FFC000] w-full h-11 rounded-lg"
        >
          확인
        </button>
      </div>
    </div>
  );
}
