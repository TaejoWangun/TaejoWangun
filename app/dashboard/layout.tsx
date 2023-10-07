'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SideNav from './components/SideNav';
import BottomNav from './components/BottomNav';
import getToken from '../lib/auth/getToken';

export default function MyFormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  useEffect(() => {
    const token = getToken('accessToken');

    if (token === null) {
      router.push('/auth/signin');
    }
  }, [router]);

  return (
    <div className="flex h-screen flex-col sm:flex-row justify-between sm:justify-normal">
      <SideNav className="hidden sm:block" />
      {children}
      <BottomNav className="block sm:hidden" />
    </div>
  );
}
