'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import getToken from '../lib/auth/getToken';

export default function RootLayout({
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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
