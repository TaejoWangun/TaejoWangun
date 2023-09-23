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
        <div className="text-center pt-7">
          <h1 className="text-base font-bold">사용방법</h1>
        </div>
        <ol>
          <li className="px-10 pt-5">
            <div className="border rounded-md shadow-md px-3 py-5">
              <div className="bg-[url(/images/howtouse.png)] bg-center bg-no-repeat h-24 flex justify-center items-center bg-contain">
                <button className="btn-primary" type="button">+ 현재 기기 추가</button>
              </div>
              <h2 className="text-sm font-semibold text-main text-center pt-4 pb-2">현재 사용하시는 기기를 추가해주세요</h2>
              <p className="text-xs font-normal text-center">현재 사용하는 기기를 사용자의 기기목록에 추가하여 기기 관리를 할 수 있습니다.</p>
            </div>
            <div>
              1
            </div>
          </li>
          <li>
            <div>
              <div>
                <p>감지모드</p>
                <p>OR</p>
                <p>알림모드</p>
                <img src="" alt="백그라운드" />
              </div>
              <h2>현재 사용하시는 기기를 추가해주세요</h2>
              <p>현재 사용하는 기기를 사용자의 기기목록에 추가하여 기기 관리를 할 수 있습니다.</p>
            </div>
            <div>
              2
            </div>
          </li>
          <li>
            <div>
              <div>
                <button type="button">Recording</button>
                <img src="" alt="백그라운드" />
              </div>
              <h2>감지를 시작해요</h2>
              <p>
                출근하거나, 여행을 간다던가, 또는 잠시 집을 비울 일이 생긴다면 기기를 감지 모드를 실행하고 집을 나서세요.
                수상한 소리가 들리면 즉시 알려드리겠습니다!
              </p>
            </div>
            <div>
              3
            </div>
          </li>
        </ol>

      </section>
    </div>
  );
}
