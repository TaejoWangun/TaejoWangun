/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import {
  HomeIcon, BuildingOffice2Icon, BuildingStorefrontIcon,
  DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon, VideoCameraIcon, ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-w-desktop">
      <section className="flex flex-col items-center w-full py-10 bg-zinc-100">
        <div className="flex flex-col justify-between pt-10 sm:flex-row w-desktop sm:p-20 gap-10">
          <div className="flex flex-col justify-between grow">
            <h1 className="text-3xl sm:text-5xl">
              소리로 우리집 안전을
              <br />
              지키는
              <span className="text-amber-400"> 보안 솔루션</span>
            </h1>
            <p className="pt-3 pb-10 sm:py-10 text-zinc-800">수상한 소리를 감지하면 바로 알려줘요!</p>
            <div className="flex justify-center sm:justify-start">
              <Link href="/dashboard/device-mode" className="py-3 text-sm rounded-sm bg-amber-400 px-7 hover:bg-amber-500">지금 시작하기</Link>
            </div>
          </div>
          <div className="relative flex items-end h-48 grow sm:h-auto">
            <Image
              src="/images/human_man1.svg"
              alt="보안솔루션 이미지"
              fill
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-10 py-10 text-center w-desktop">
        <h1 className="text-2xl sm:text-3xl">
          이런 분들에게 유용하게 쓰일 수 있어요!
        </h1>
        <p className="py-3 text-sm text-zinc-800">
          내가 없을 때 무슨 일이 일어나진 않을까 걱정인가요? 저희가 도와드릴게요.
        </p>
        <ul className="w-full py-10 grid sm:grid-cols-3 gap-10">
          <li className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white border w-80 h-72 rounded-md border-zinc-100 px-7 py-9 drop-shadow-lg">
              <HomeIcon className="w-12 p-1 bg-green-100 rounded-tl-lg rounded-br-lg text-amber-400" />
              <h2 className="pt-6 pb-2 text-2xl">1인 가구</h2>
              <p className="text-sm text-zinc-500">
                출근하러 나갔는데 도둑이 들진 않았는지,
                <br />
                내 애완동물이 혼자서도 잘 돌아다니고
                <br />
                있는지 궁금한 분
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white border w-80 h-72 rounded-md border-zinc-100 px-7 py-9 drop-shadow-lg">
              <BuildingOffice2Icon className="w-12 p-1 bg-green-100 rounded-tl-lg rounded-br-lg text-amber-400" />
              <h2 className="pt-6 pb-2 text-2xl">스타트업</h2>
              <p className="text-sm text-zinc-500">
                모두들 퇴근한 사이 누군가 잠입해서 우리
                <br />
                회사 자산을 훔쳐가진 않을까 걱정인 분
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-white border w-80 h-72 rounded-md border-zinc-100 px-7 py-9 drop-shadow-lg">
              <BuildingStorefrontIcon className="w-12 p-1 bg-green-100 rounded-tl-lg rounded-br-lg text-amber-400" />
              <h2 className="pt-6 pb-2 text-2xl">소상공인</h2>
              <p className="text-sm text-zinc-500">
                장사 마치고 나왔는데 고양이가 우리가게
                <br />
                생선을 건드리진 않을까 걱정인 분
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center w-full bg-zinc-100">
        <div className="flex flex-col py-5 w-desktop sm:px-20 sm:flex-row">
          <Image src="/images/gungye_black.jpg" alt="궁예 이미지" width={300} height={230} />
          <div className="flex items-center justify-center py-10 sm:ps-20">
            <p className="italic leading-relaxed sm:text-4xl">
              &quot;Who was that?.. Who just caughted?&quot;
              <br />
              - Gung Ye(867~918)
            </p>
          </div>
        </div>
      </section>
      <section id="introduce" className="flex flex-col items-center w-full py-10">
        <ul className="w-desktop">
          <li className="flex flex-col px-10 py-10 sm:px-20 sm:flex-row">
            <Image src="/images/human_woman2.svg" alt="알림 이미지" width={300} height={252} />
            <div className="flex flex-col justify-center py-10 sm:p-24">
              <h1 className="font-bold sm:text-3xl">수상한 소리가 나면 주인한테 알려줘요</h1>
              <p className="text-xs sm:text-md text-zinc-800">일정 수준 이상의 소리가 나면 주인의 핸드폰으로 알림 메시지를 보냅니다.</p>
            </div>
          </li>
          <li className="flex flex-col px-10 py-10 sm:px-20 sm:flex-row-reverse">
            <Image src="/images/human_woman1.svg" alt="녹음 이미지" width={300} height={276} />
            <div className="flex flex-col justify-center py-10 sm:p-24">
              <h1 className="font-bold sm:text-3xl">무슨 소리가 났었는지 확인 할 수 있어요</h1>
              <p className="text-xs sm:text-md text-zinc-800">
                알림 메시지를 누르고 재생 버튼을 누르면, 어떤 소리가 났었는지 녹음된 내용을 다시 들을 수 있고 이를
                통해 어떤 상황인지 유추해낼 수 있어요.
              </p>
            </div>
          </li>
          <li className="flex flex-col px-10 py-10 sm:px-20 sm:flex-row">
            <Image src="/images/human_man2.svg" alt="분석 이미지" width={300} height={252} />
            <div className="flex flex-col justify-center py-10 sm:p-24">
              <h1 className="font-bold sm:text-3xl">언제 어디서 소리가 났는지 볼 수 있어요</h1>
              <p className="text-xs sm:text-md text-zinc-800">기기를 여러 곳에 설치해도 어디서 무슨 소리가 났는지 확인 가능해요.</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center w-full py-16 bg-zinc-100">
        <div className="px-10 w-desktop sm:px-20 grid sm:grid-cols-2">
          <div className="flex flex-col justify-center pb-32 gap-5 sm:pb-0">
            <h1 className="text-3xl font-bold">
              E-Waste를 줄여서
              <br />
              <span className="text-amber-400">
                지구를 지켜주세요
              </span>
            </h1>
            <p>
              저희 솔루션은 CCTV 같은 다른 보안 기기와는 다르게 따로 하드웨어를 사
              <br />
              지 않고 집에서 더 이상 사용되지 않고 버려졌을 기기들을 사용할 수 있는
              <br />
              친환경적인 솔루션이에요.
            </p>
          </div>
          <div>
            <h2 className="text-center pb-14 sm:pb-5">전세계에서 매년 폐기되는 전자기기</h2>
            <ul className="grid grid-cols-2 gap-10">
              <li className="flex gap-4">
                <DevicePhoneMobileIcon width={40} />
                <div>
                  <h3 className="text-3xl text-amber-400">
                    5.3B
                  </h3>
                  <p>
                    Phones
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <ComputerDesktopIcon width={40} />
                <div>
                  <h3 className="text-3xl text-amber-400">
                    410M
                  </h3>
                  <p>
                    PCs
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <DeviceTabletIcon width={40} />
                <div>
                  <h3 className="text-3xl text-amber-400">
                    100M
                  </h3>
                  <p>
                    Tablets
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <VideoCameraIcon width={40} />
                <div>
                  <h3 className="text-3xl text-amber-400">
                    1M
                  </h3>
                  <p>
                    CCTVs
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="ask" className="px-5 pt-5 pb-20">
        <h1 className="py-5 text-3xl text-center">문의하기</h1>
        <form action="submit" className="flex flex-col gap-5 w-tablet">
          <div className="flex gap-5">
            <label className="basis-1/2">
              이름
              <input className="w-full p-2 border border-black grow rounded-md" type="text" />
            </label>
            <label className="basis-1/2">
              이메일
              <input className="w-full p-2 border border-black rounded-md" type="text" />
            </label>
          </div>
          <label>
            문의 카테고리
            <select className="w-full p-2 border border-black rounded-md">
              <option value="">카테고리 선택</option>
            </select>
          </label>
          <label>
            문의내용
            <textarea className="w-full p-2 border border-black rounded-md" placeholder="무엇을 도와드릴까요?" rows={5} />
          </label>
          <div className="text-center">
            <button type="button" className="py-2 px-14 bg-amber-400 rounded-md hover:bg-amber-500">보내기</button>
          </div>
        </form>
      </section>
      <section className="w-full pb-6 text-center bg-zinc-100 pt-14 ">
        <h1 className="text-2xl leading-snug sm:text-6xl">
          세상에서 가장 간편한 보안,
          <br />
          지금 경험해보세요!
        </h1>
        <div className="py-10 text-center">
          <Link href="/dashboard/device-mode">
            <button type="button" className="px-6 py-2 bg-amber-400 rounded-md hover:bg-amber-500">
              <span className="flex gap-2">
                지금 시작하기
                <ArrowLongRightIcon width={20} />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
