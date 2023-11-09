export default function InqueryForm() {
  return (
    <div className="w-full min-w-[300px]">
      <div className="mb-4 font-semibold text-center">문의하기</div>

      <div className="pl-2 mb-1 text-sm">문의 카테고리</div>

      <div className="relative mb-4">
        <div className="w-full p-2 text-sm border border-gray-300 peer rounded-md">카테고리 선택</div>
        <ul className="hidden absolute peer-hover:block hover:block text-sm border border-gray-300 rounded-md p-2 min-w-[100px] top-12 w-full shadow-md bg-white">
          <li>서브메뉴1</li>
          <li>서브메뉴2</li>
          <li>서브메뉴3</li>
        </ul>
      </div>

      <form className="flex flex-col">
        <label htmlFor="question">
          <div className="pl-2 mb-1 text-sm">문의 내용</div>
          <textarea id="question" placeholder="무엇을 도와드릴까요?" className="border w-full min-h-[100px] rounded-md p-2 border-gray-300 text-sm" />
        </label>

        <button type="button" className="w-full p-2 text-sm bg-[#FFC000] rounded-md mt-4">보내기</button>
      </form>
    </div>
  );
}
