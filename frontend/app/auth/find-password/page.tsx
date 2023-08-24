import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';

export default function FindPassword() {
  return (
    <>
      <Header text="비밀번호 찾기" />
      <Description text="비밀번호를 찾고자하는 이메일을 입력해주세요." />
      <form className="flex flex-col">
        <div className="mb-1 text-sm text-[#2F4858] ">E mail</div>
        <input
          className="mb-6 h-16 w-[300px] sm:w-[545px] rounded-md border py-4 px-3"
          type="email"
        />
        <Button text="다음" />
      </form>
    </>
  );
}
