'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="flex items-center justify-center px-20 py-3 bg-amber-400 hover:bg-amber-500 rounded-md gap-3" type="button">
      <ArrowLeftIcon width={32} />
      이전으로
    </button>
  );
}
