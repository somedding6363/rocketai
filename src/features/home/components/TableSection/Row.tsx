// features/home/components/TableSection/Row.tsx
// 사주 테이블의 행을 출력하는 컴포넌트
import { COLUMN_KEYS } from "@/constants/columns";
import { Data } from "@/models/Data";

interface RowProps {
  title: string;
  data: Data;
}
const MAP: { [key: string]: string } = { "예시": "例示" };

// 테이블의 각 셀에 들어갈 내용을 출력
function DataView({ value }: { value: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {MAP[value] && (
        <span className="text-sm xxs:text-base xs:text-lg font-bold">
          {MAP[value]}
        </span>
      )}
      <span className="text-xxs xxs:text-xs xs:text-sm">({value})</span>
    </div>
  );
}

// 테이블의 한 줄을 출력
export default function Row({ title, data }: RowProps) {
  return (
    <div className="border-b-2 border-r-2 grid grid-cols-5 text-center">
      {/* 속성 */}
      <div className="py-3 flex justify-center items-center border-r-2 text-xxs xxs:text-xs xs:text-sm">
        {title}
      </div>
      {/* 값 */}
      {COLUMN_KEYS.map((v, i) => (
        <div
          key={v}
          className={`flex flex-col py-3 justify-center items-center gap-3 bg-white border-r ${
            i === 3 ? "border-[#ffffff00]" : "border-gray-400"
          }`}
        >
          {/* 값이 없음 */}
          {data[v] === null && <DataView value={"없음"} />}
          {/* 값이 한 개 */}
          {typeof data[v] === "string" && <DataView value={data[v]} />}
          {/* 값이 여러 개 */}
          {Array.isArray(data[v]) &&
            data[v].map((value, index) => (
              <DataView key={index} value={value} />
            ))}
        </div>
      ))}
    </div>
  );
}
