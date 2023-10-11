import SideNav from './components/SideNav';
import BottomNav from './components/BottomNav';

export default function MyFormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col justify-between h-screen sm:flex-row sm:justify-normal">
      <SideNav className="hidden sm:block" />
      {children}
      <BottomNav />
    </div>
  );
}
