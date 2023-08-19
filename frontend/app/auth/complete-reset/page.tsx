export default function FindPassword() {
  return (
    <>
      <div className="mt-6 text-5xl text-[#2F4858]">비밀번호 변경 완료!</div>
      <div className="my-8 text-[#828282] ">
        비밀번호가 성공적으로 재설정되었습니다.
      </div>

      <button
        className="h-16 w-[545px] rounded-md bg-[#FFC000] font-semibold"
        type="button"
      >
        완료
      </button>
    </>
  );
}
