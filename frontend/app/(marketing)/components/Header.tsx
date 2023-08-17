import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-zinc-100 flex justify-center min-w-desktop">
      <div className="w-desktop flex justify-between items-center pt-5 px-20">
        <Link href="/">
          <Image src="/images/logo_mark.svg" alt="로고" width={300} height={300} />
        </Link>
        <div>
          <ul className="flex gap-7 items-center">
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
      </div>
    </header>
  );
}
