// features/home/components/TableSection/Table.tsx
// 사주 테이블의 헤더 부분을 출력하는 컴포넌트(시, 일, 월, 년)
import { COLUMN_KEYS, COLUMN_LABELS } from "@/constants/columns";

export default function TableHeader() {
  return (
    <div className="border-b-2 border-r-2 grid grid-cols-5 text-center">
      <div className="border-r-2"></div>
      {COLUMN_KEYS.map((v, i) => (
        <div
          key={v}
          className={`flex py-3 justify-center items-center gap-3 border-r text-lg xxs:text-xl xs:text-2xl ${
            i === 3 ? "border-[#ffffff00]" : "border-gray-400"
          }`}
        >
          {COLUMN_LABELS[v]}
        </div>
      ))}
    </div>
  );
}
