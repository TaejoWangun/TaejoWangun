'use client';

import {
  BellIcon, Cog6ToothIcon, DocumentTextIcon, HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  {
    href: '/dashboard/device-mode',
    label: '홈',
    icon: HomeIcon,
  },
  {
    href: '/dashboard/notice',
    label: '알림',
    icon: BellIcon,
  },
  {
    href: '/dashboard/device-list',
    label: '기기목록',
    icon: DocumentTextIcon,
  },
  {
    href: '/dashboard/cs',
    label: '설정',
    icon: Cog6ToothIcon,
  },
];

export default function BottomNav({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-[64px] shrink-0 sm:hidden" />
      <nav className={`${className} bg-[#e5f0f1] text-[#9db2ce] flex h-16 fixed bottom-0 w-full`}>
        <ul className="flex justify-center gap-4 text-sm grow">
          {
          items.map((item) => (
            pathname === item.href
              ? (
                <li key={item.label} className="w-16">
                  <Link
                    className="flex flex-col gap-1 w-full h-full items-center justify-center bg-[#e8ebd9] text-[#ffc000] border-t-4 border-[#ffc000]"
                    href={item.href}
                  >
                    <item.icon width={26} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ) : (
                <li key={item.label} className="w-16">
                  <Link
                    className="flex flex-col items-center justify-center w-full h-full gap-1"
                    href={item.href}
                  >
                    <item.icon width={26} />
                  </Link>
                </li>
              )
          ))
        }
        </ul>
      </nav>
    </>
  );
}
