import Image from 'next/image';
import Link from 'next/link';
import GoBackButton from './component/GoBackButton';

export default function NotFound() {
  return (
    <main className="h-screen flex justify-center min-w-desktop">
      <div className="w-desktop px-10 sm:px-20 ">
        <Link href="/" className="relative flex w-40 sm:w-72 h-20">
          <Image src="/images/logo_mark.svg" alt="로고" fill className="object-contain" />
        </Link>
        <div className="sm:pt-44 flex flex-col-reverse sm:flex-row gap-10">
          <div>
            <h1 className="text-2xl sm:text-5xl">404 ERROR</h1>
            <p className="text-xl sm:text-4xl sm:py-5">페이지를 찾을 수 없습니다</p>
            <p className="py-2 sm:py-5 text-xs sm:text-base">
              존재하지 않는 주소를 입력하셨거나
              <br />
              요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
            </p>
            <div className="pt-14 sm:pt-24 pb-10">
              <GoBackButton />
            </div>
          </div>
          <div className="relative grow" style={{ minHeight: '240px' }}>
            <Image src="/images/not_found.png" alt="404 Not Found Image" fill className="object-contain" />
          </div>
        </div>
      </div>
    </main>
  );
}
