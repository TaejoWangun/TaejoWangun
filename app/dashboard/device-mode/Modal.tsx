import Image from 'next/image';
import Link from 'next/link';

export default function Modal() {
  return (
    <div className="open-modal fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex items-center justify-center">
      <div className="max-w-2xl px-6">
        <div className="bg-white rounded-lg shadow">
          <section className="flex items-start justify-between p-4 rounded-t">
            <div>
              <div className="border rounded-md p-2 w-8 h-8">
                <Image src="/images/credit_card_refresh.svg" width={15} height={15} alt="card" />
              </div>
              <h1 className="pt-2 text-lg font-semibold text-gray-900">
                혹시 기존에 등록하셨던 기기인가요?
              </h1>
              <p className="text-sm">현재 기기가 아래 기기 중 하나인 경우만 선택해주세요!</p>
            </div>
            <Link href="?modal=false" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </Link>
          </section>
          <section className="">
            <ul>
              <li>
                ssss
              </li>
            </ul>
          </section>
          <section className="">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              아니요, 새 기기로 등록할래요
            </button>
            <button type="button" className="btn-primary">
              네, 이 기존 기기로 등록할래요.
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
