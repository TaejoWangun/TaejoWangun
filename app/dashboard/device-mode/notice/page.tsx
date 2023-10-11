import Image from 'next/image';
import Link from 'next/link';

type Props = {
  searchParams: Record<string, string> | null | undefined
};
export default function Notice({ searchParams }: Props) {
  return (
    <div className="p-3 sm:p-7 grow">
      <section className="pt-5">
        <div className="flex justify-between">
          <p className="text-lg font-bold text-letter sm:text-lg">
            현재
            {' '}
            <span>알림 모드</span>
            입니다.
          </p>
          <div className="shrink-0">
            <Link href="?modal=list" className="px-2 py-2 text-xs font-bold rounded sm:px-3 sm:text-lg bg-letter text-main">
              모드 변경
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 pt-5">
        <div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-green-400 border rounded-md">
              <div className="relative w-5 h-5">
                <Image src="/images/checkmark.svg" alt="card" fill />
              </div>
            </div>
            <h2 className="text-base">알림 횟수</h2>
          </div>
          <div className="pt-3">
            <p className="text-xl font-semibold">2</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-700 border rounded-md">
              <div className="relative w-5 h-5">
                <Image src="/images/stopwatch.svg" alt="card" fill />
              </div>
            </div>
            <h2 className="text-base">가동 시간</h2>
          </div>
          <div className="pt-3 tracking-wider">
            <span className="text-xl font-semibold">2</span>
            <span className="text-xs font-semibold text-[rgba(7,4,23,0.40)]">h</span>
            <span className="text-xl font-semibold">06</span>
            <span className="text-xs font-semibold text-[rgba(7,4,23,0.40)]">m</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <ul>
            <li>Hansung_PC</li>
            <li>MACPro14</li>
            <li>LG-GREM</li>
          </ul>
        </div>
      </section>
      <section>graph</section>
    </div>
  );
}
