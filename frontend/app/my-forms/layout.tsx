import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyFormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-slate-400">ㅎㅎ 사이드네브!</nav>
        {children}
      </body>
    </html>
  );
}
