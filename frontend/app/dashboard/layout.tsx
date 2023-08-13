import SideNav from './components/SideNav';

export default function MyFormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SideNav />
      {children}
    </>
  );
}
