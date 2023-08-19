export default function FindPassword() {
  return (
    <>
      <div className="mt-6 text-4xl sm:text-5xl text-[#2F4858]">
        비밀번호 찾기
      </div>
      <div className="my-8 text-sm sm:text-base text-[#828282] ">
        비밀번호를 찾고자하는 이메일을 입력해주세요.
      </div>
      <form className="flex flex-col">
        <div className="mb-1 text-sm text-[#2F4858] ">E mail</div>
        <input
          className="mb-6 h-16 w-[300px] sm:w-[545px] rounded-md border py-4 px-3"
          type="email"
        />
        <button
          className="h-16 s-[300px] sm:w-[545px] rounded-md bg-[#FFC000] font-semibold"
          type="submit"
        >
          다음
        </button>
      </form>
    </>
  );
}
