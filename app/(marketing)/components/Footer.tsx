import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-primary min-w-desktop">
      <Link href="/" className="p-20">
        <Image src="/images/logo_mark.svg" alt="로고" width={300} height={300} />
      </Link>
      <p className="text-zinc-200 pb-12">© 2020 - All rights reserved</p>
    </footer>
  );
}
