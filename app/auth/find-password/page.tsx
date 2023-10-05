import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';

export default function FindPassword() {
  return (
    <>
      <Header text="비밀번호 찾기" />
      <Description text="비밀번호를 찾고자하는 이메일을 입력해주세요." />
      <form className="flex flex-col gap-4 sm:gap-6">
        <input
          placeholder="이메일"
          className="w-[300px] sm:w-[580px] h-10 sm:h-16 py-2 sm:py-4 px-4 sm:px-6 border rounded-xl text-xs sm:text-base"
          type="email"
          required
        />
        <Button text="다음" />
      </form>
    </>
  );
}
