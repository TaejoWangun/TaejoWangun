export default function CertifyEmail() {
  return (
    <>
      <div className="mt-6 text-5xl text-[#2F4858]">이메일 인증</div>
      <div className="my-8 text-[#828282] ">
        이메일로 받은 4자리 코드를 입력해주세요.
      </div>
      <form className="flex flex-col items-center">
        <div className="flex gap-x-6">
          <input
            className="h-[76px] w-[84px] rounded-md border py-4 px-3 text-4xl text-center"
            type="email"
          />
          <input
            className="h-[76px] w-[84px] rounded-md border py-4 px-3 text-4xl text-center"
            type="email"
          />
          <input
            className="h-[76px] w-[84px] rounded-md border py-4 px-3 text-4xl text-center"
            type="email"
          />
          <input
            className="h-[76px] w-[84px] rounded-md border py-4 px-3 text-4xl text-center"
            type="email"
          />
        </div>
        <div className="my-6 text-sm text-[#F2451C] ">00:30</div>
        <button
          className="h-16 w-[545px] rounded-md bg-[#FFC000] font-semibold"
          type="submit"
        >
          다음
        </button>
        <div className="mt-8 text-sm text-[#828282]">
          코드를 받지 못하셨나요?&nbsp;
          <span className="text-[#F2451C]">재발송</span>
        </div>
      </form>
    </>
  );
}
