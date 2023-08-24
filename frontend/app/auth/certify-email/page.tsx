import Header from '../components/Header';
import Description from '../components/Description';
import Button from '../components/Button';

export default function CertifyEmail() {
  return (
    <>
      <Header text="이메일 인증" />
      <Description text="이메일로 받은 4자리 코드를 입력해주세요." />
      <form className="flex flex-col items-center">
        <div className="flex gap-x-5 sm:gap-x-6">
          <input
            className="h-[60px] w-[68px] sm:h-[76px] sm:w-[84px] rounded-md border py-4 px-3 text-3xl sm:text-4xl text-center"
            type="email"
          />
          <input
            className="h-[60px] w-[68px] sm:h-[76px] sm:w-[84px] rounded-md border py-4 px-3 text-3xl sm:text-4xl text-center"
            type="email"
          />
          <input
            className="h-[60px] w-[68px] sm:h-[76px] sm:w-[84px] rounded-md border py-4 px-3 text-3xl sm:text-4xl text-center"
            type="email"
          />
          <input
            className="h-[60px] w-[68px] sm:h-[76px] sm:w-[84px] rounded-md border py-4 px-3 text-3xl sm:text-4xl text-center"
            type="email"
          />
        </div>
        <div className="my-6 text-sm text-[#F2451C] ">00:30</div>
        <Button text="다음" />
        <div className="mt-8 text-sm text-[#828282]">
          코드를 받지 못하셨나요?&nbsp;
          <span className="text-[#F2451C]">재발송</span>
        </div>
      </form>
    </>
  );
}
