import Image from 'next/image';
import Link from 'next/link';
import GoBackButton from './component/GoBackButton';

export default function NotFound() {
  return (
    <main className="flex justify-center h-screen min-w-desktop">
      <div className="px-10 w-desktop sm:px-20 ">
        <Link href="/" className="relative flex w-40 h-20 sm:w-72">
          <Image src="/images/logo_mark.svg" alt="로고" fill className="object-contain" />
        </Link>
        <div className="flex flex-col-reverse sm:pt-44 sm:flex-row gap-10">
          <div>
            <h1 className="text-2xl sm:text-5xl">404 ERROR</h1>
            <p className="text-xl sm:text-4xl sm:py-5">페이지를 찾을 수 없습니다</p>
            <p className="py-2 text-xs sm:py-5 sm:text-base">
              존재하지 않는 주소를 입력하셨거나
              <br />
              요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
            </p>
            <div className="pb-10 pt-14 sm:pt-24">
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
