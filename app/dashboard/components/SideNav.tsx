'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkStyle = 'hover:bg-[#197785] hover:border-white border-s-8 border-primary flex w-full px-10 py-3';
const selectedStyle = `${linkStyle} bg-[#197785] border-white`;

const items = [
  {
    label: '홈',
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
    label: '세팅',
    href: '/dashboard/cs',
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
            priority
            className="object-contain"
          />
        </Link>
      </div>
      <ul className="text-white flex flex-col pt-10">
        {items.map((item) => (
          <li
            key={item.label}
          >
            <Link href={item.href} className={pathname === item.href ? selectedStyle : linkStyle}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
