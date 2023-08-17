import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-zinc-100 flex justify-center min-w-desktop">
      <div className="grow sm:grow-0 w-desktop flex justify-between items-center pt-5 px-5 sm:px-20">
        <Link href="/" className="relative flex w-40 sm:w-72 h-20">
          <Image src="/images/logo_mark.svg" alt="로고" fill className="object-contain" />
        </Link>
        <div>
          <ul className="hidden sm:flex gap-7 items-center">
            <li>
              <Link className="text-zinc-600 hover:font-black" href="/#introduce">소개</Link>
            </li>
            <li>
              <Link className="text-zinc-600 hover:font-black" href="/#ask">문의</Link>
            </li>
            <li>
              <Link className="text-zinc-600 hover:font-black" href="/">로그인</Link>
            </li>
            <li>
              <Link
                href="/"
                className="bg-amber-400 py-3 px-7 rounded-sm text-sm hover:bg-amber-500"
              >
                회원가입
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden text-xs">
          <Bars3Icon />
          Menu
        </div>
      </div>
    </header>
  );
}
