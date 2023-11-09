import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-center bg-zinc-100 min-w-desktop">
      <div className="flex items-center justify-between px-5 pt-5 grow sm:grow-0 w-desktop sm:px-20">
        <Link href="/" className="relative flex w-40 h-20 sm:w-72">
          <Image src="/images/logo_mark.svg" alt="로고" fill className="object-contain" priority />
        </Link>
        <div>
          <ul className="items-center hidden sm:flex gap-7">
            <li>
              <Link className="text-zinc-600 hover:font-black" href="/#introduce">소개</Link>
            </li>
            <li>
              <Link className="text-zinc-600 hover:font-black" href="/#ask">문의</Link>
            </li>
            <li>
              <Link className="text-zinc-600 hover:font-black" href="/auth/signin">로그인</Link>
            </li>
            <li>
              <Link
                href="/auth/signup"
                className="py-3 text-sm rounded-sm bg-amber-400 px-7 hover:bg-amber-500"
              >
                회원가입
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xs sm:hidden">
          <Bars3Icon />
          Menu
        </div>
      </div>
    </header>
  );
}
