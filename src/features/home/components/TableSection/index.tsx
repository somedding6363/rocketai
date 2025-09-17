// features/home/components/TableSection/index.tsx
// 사주 테이블 영역을 출력하는 컴포넌트
import Table from "./Table";

export default function TableSection() {
  return (
    <div className="px-3 pb-30">
      <div className="border-3 relative bg-(--table-bg)">
        {/* 선 무늬 */}
        <div className="absolute top-2 w-full bg-black h-[1px]"></div>
        <div className="absolute bottom-2 w-full bg-black h-[1px]"></div>
        <div className="absolute left-2 h-full bg-black w-[1px]"></div>
        <div className="absolute right-2 h-full bg-black w-[1px]"></div>
        {/* 구름 무늬 */}
        <div className="absolute top-10 w-full h-14 px-2 overflow-hidden">
          <img
            src="/shape1.png"
            alt=""
            className="absolute left-2 h-full pt-4"
          />
          <img
            src="/shape2.png"
            alt=""
            className="absolute right-2 h-full pb-4"
          />
        </div>
        {/* 제목 */}
        <div className="text-center mt-10 px-2">
          <p className="text-sm xxs:text-base xs:text-lg">ㅇㅇㅇ님의 사주</p>
          <p className="text-lg xxs:text-xl xs:text-2xl mt-1">
            xxxx년 x월 xx일 xx:xx
          </p>
        </div>
        {/* 표 */}
        <Table />
      </div>
    </div>
  );
}
