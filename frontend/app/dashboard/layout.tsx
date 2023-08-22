import SideNav from './components/SideNav';
import BottomNav from './components/BottomNav';

export default function MyFormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col sm:flex-row justify-between sm:justify-normal">
      <SideNav className="hidden sm:block" />
      {children}
      <BottomNav className="block sm:hidden" />
    </div>
  );
}
