import Image from 'next/image';

export default function FindPassword() {
  return (
    <>
      <div className="mt-6 text-5xl text-[#2F4858]">비밀번호 재설정</div>
      <div className="my-8 text-[#828282] ">
        계정에 로그인하고 모든 기능에 접근할 수 있도록 새 비밀번호를
        설정해주세요.
      </div>
      <form className="flex flex-col">
        <div className="mb-1 text-sm text-[#2F4858] ">새 비밀번호 입력</div>
        <div className="mb-6 flex relative">
          <input
            className=" h-16 w-[545px] rounded-md border py-4 px-3"
            type="password"
            placeholder="문자, 숫자, 특수문자 포함 8~24자"
          />
          <button type="button" className="absolute top-5 right-4">
            <Image
              src="/images/eye_open.svg"
              alt="뜬눈 이미지"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="mb-1 text-sm text-[#2F4858] ">비밀번호 확인</div>
        <div className="mb-6 flex relative">
          <input
            className="mb-6 h-16 w-[545px] rounded-md border py-4 px-3"
            type="password"
            placeholder="문자, 숫자, 특수문자 포함 8~24자"
          />
          <button type="button" className="absolute top-5 right-4">
            <Image
              src="/images/eye_closed.svg"
              alt="뜬눈 이미지"
              width={24}
              height={24}
            />
          </button>
        </div>

        <button
          className="h-16 w-[545px] rounded-md bg-[#FFC000] font-semibold"
          type="submit"
        >
          비밀번호 업데이트
        </button>
      </form>
    </>
  );
}
