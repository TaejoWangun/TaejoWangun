'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkStyle = 'hover:bg-[#197785] hover:border-white border-s-8 border-primary flex w-full px-10 py-3';
const selectedStyle = `${linkStyle} bg-[#197785] border-white`;

const items = [
  {
    label: '기기 모드',
    href: '/dashboard/device-mode',
  },
  {
    label: '알림',
    href: '/dashboard/notice',
  },
  {
    label: '기기 목록',
    href: '/dashboard/device-list',
  },
  {
    label: '고객센터',
    href: '/dashboard/cs',
  },
  {
    liStyle: 'pt-10',
    label: '마이 페이지',
    href: '/dashboard/my-page',
  },
];

export default function SideNav({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <nav className={`${className} bg-primary`}>
      <div className="py-3">
        <Link href="/dashboard/device-list" className="relative flex w-72 h-16">
          <Image
            src="/images/logo_mark.svg"
            alt="로고"
            fill
            className="object-contain"
          />
        </Link>
      </div>
      <ul className="text-white flex flex-col pt-10">
        {
          items.map((item) => (
            <li className={item.liStyle} key={item.href}>
              <Link href={item.href} className={pathname === item.href ? selectedStyle : linkStyle}>
                {item.label}
              </Link>
            </li>
          ))
        }
        <li className="text-zinc-400 text-sm border-s-8 border-primary hover:text-white py-1">
          <Link className="px-10" href="/">
            로그아웃
          </Link>
        </li>
      </ul>
    </nav>
  );
}
