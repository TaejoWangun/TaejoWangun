import Link from 'next/link';

type Props = {
  searchParams: Record<string, string> | null | undefined
};
export default function Notice({ searchParams }: Props) {
  return (
    <div className="p-3 sm:p-7">
      <section>
        <div className="flex justify-between">
          <p className="text-xs font-bold text-letter sm:text-lg">
            현재
            {' '}
            <span>감지 모드</span>
            입니다.
          </p>
          <div className="shrink-0">
            <Link href="?modal=list" className="btn-primary">
              모드 변경
            </Link>
          </div>
        </div>
      </section>
      <section>
        <button type="button">Start</button>
        <p>감지를 시작하려면 위 버튼을 눌러주세요,</p>
      </section>
      <section>
        <div>
          <ul>
            <li>Hansung_PC</li>
            <li>MACPro14</li>
            <li>LG-GREM</li>
          </ul>
        </div>
        <div>
          <div>
            <h2>알림 횟수</h2>
            <p>2</p>
          </div>
          <div>
            <h2>가동 시간</h2>
            <p>3h 06m</p>
          </div>
        </div>
      </section>
      <section>graph</section>
    </div>
  );
}
