import SideNav from './components/SideNav';
import BottomNav from './components/BottomNav';

export default function MyFormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col justify-between h-screen sm:flex-row sm:justify-normal">
      <SideNav />
      {children}
      <BottomNav />
    </div>
  );
}
