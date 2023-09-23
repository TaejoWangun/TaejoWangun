import Image from 'next/image';

export default function HowToUse() {
  return (
    <div className="p-3 sm:p-7">
      <section>
        <div className="flex justify-between">
          <p className="text-letter text-xs sm:text-lg font-bold">
            이 기기는 등록되지 않은 기기입니다.
            <br />
            기기를 등록하지 않아도 알림 내역은 확인 가능합니다.
          </p>
          <div className="shrink-0">
            <button type="button" className="btn-primary">
              + 현재 기기 추가
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center pt-7 sm:pt-16">
          <h1 className="text-base font-bold sm:text-xl">사용방법</h1>
        </div>
        <ol className="lg:grid lg:grid-cols-3 px-10 lg:gap-5 sm:pt-10">
          <li className="pt-5 flex flex-col">
            <div className="grow border rounded-md shadow-md px-3 py-5">
              <div className="bg-[url(/images/howtouse.png)] bg-center bg-no-repeat h-24 flex justify-center items-center bg-contain">
                <div className="bg-main rounded py-2 px-1 text-xs text-letter font-bold">+ 현재 기기 추가</div>
              </div>
              <h2 className="text-sm font-semibold text-main text-center pt-4 pb-2">현재 사용하시는 기기를 추가해주세요</h2>
              <p className="text-xs font-normal text-center">현재 사용하는 기기를 사용자의 기기목록에 추가하여 기기 관리를 할 수 있습니다.</p>
            </div>
            <div className="pt-5 flex justify-center">
              <Image
                src="/images/circle1.svg"
                alt="first"
                width={122}
                height={34}
              />
            </div>
          </li>
          <li className="pt-5 flex flex-col">
            <div className="grow border rounded-md shadow-md px-3 py-5">
              <div className="bg-[url(/images/howtouse.png)] bg-center bg-no-repeat h-24 flex justify-center items-center bg-contain flex-col">
                <div className="w-32 text-main font-bold">감지 모드</div>
                <div>OR</div>
                <div className="w-32 text-end text-letter font-bold">알림 모드</div>
              </div>
              <h2 className="text-sm font-semibold text-main text-center pt-4 pb-2">용도에 맞게 모드를 설정해주세요</h2>
              <p className="text-xs font-normal text-center">감지 모드는 주변 소리를 녹음하여 수상한 소리가 나면 알림 모드 기기로 알림을 보내주는 역할을 합니다. 알림 모드에서는 알림을 받아서 녹음 내역을 듣거나 모니터링 역할을 합니다.</p>
            </div>
            <div className="pt-5 flex justify-center">
              <Image
                src="/images/circle2.svg"
                alt="first"
                width={122}
                height={34}
              />
            </div>
          </li>
          <li className="pt-5 flex flex-col">
            <div className="grow border rounded-md shadow-md px-3 py-5">
              <div className="bg-[url(/images/howtouse.png)] bg-center bg-no-repeat h-24 flex justify-center items-center bg-contain">
                <Image
                  src="/images/record.svg"
                  alt="first"
                  width={122}
                  height={34}
                />
              </div>
              <h2 className="text-sm font-semibold text-main text-center pt-4 pb-2">감지를 시작해요</h2>
              <p className="text-xs font-normal text-center">출근하거나, 여행을 간다던가, 또는 잠시 집을 비울 일이 생긴다면 기기를 감지 모드를 실행하고 집을 나서세요. 수상한 소리가 들리면 즉시 알려드리겠습니다!</p>
            </div>
            <div className="pt-5 flex justify-center">
              <Image
                src="/images/circle3.svg"
                alt="first"
                width={122}
                height={34}
              />
            </div>
          </li>
        </ol>

      </section>
    </div>
  );
}
