'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="my-[168px] flex flex-col items-center ">
      {pathname === '/auth/complete-reset' ? (
        <Image
          src="/images/upload.svg"
          alt="업로드 이미지"
          width={130}
          height={130}
          className="sm:w-[164px] sm:h-[164px]"
        />
      ) : (
        <Image
          src="/images/logo_mark.svg"
          alt="로고 이미지"
          width={261}
          height={57}
          className="invisible sm:visible"
        />
      )}
      {children}
    </div>
  );
}
