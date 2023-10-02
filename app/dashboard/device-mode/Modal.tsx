import { ReactNode } from 'react';

type Props = {
  children: ReactNode
};

export default function Modal({ children }: Props) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center open-modal bg-black/30">
      <div className="max-w-2xl px-6">
        <div className="bg-white rounded-lg shadow">
          { children }
        </div>
      </div>
    </div>
  );
}
