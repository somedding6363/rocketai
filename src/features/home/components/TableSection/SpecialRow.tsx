// features/home/components/TableSection/SpecialRow.tsx
// 사주 테이블의 행을 출력하는 컴포넌트(천간, 지지 전용)
import { COLUMN_KEYS } from "@/constants/columns";
import { Data } from "@/models/Data";

interface MapKey {
  letter: string;
  letter2: string;
  bgColor: string;
  textColor: string;
  border: boolean;
}
// 임의 데이터
const MAP: { [key: string]: MapKey } = {
  "가": {
    letter: "一",
    letter2: "一一",
    bgColor: "#303030",
    textColor: "#FFFFFF",
    border: false,
  },
  "나": {
    letter: "二",
    letter2: "二二",
    bgColor: "#CCCCCC",
    textColor: "#000000",
    border: false,
  },
  "다": {
    letter: "三",
    letter2: "三三",
    bgColor: "#db4848",
    textColor: "#FFFFFF",
    border: false,
  },
};

// 테이블의 각 셀에 들어갈 내용을 출력
function BoxView({ value }: { value: string | string[] | null }) {
  // 값이 없다면 공백 출력
  // 문자열만 받는다고 가정
  if (!value || typeof value !== "string") return null;
  return (
    <div className="relative w-full pb-[100%]">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center rounded-lg overflow-hidden"
        style={{
          backgroundColor: MAP[value]?.bgColor ?? "white",
          color: MAP[value]?.textColor ?? "black",
          border: MAP[value]?.border === false ? "none" : "1px solid black",
        }}
      >
        <span className="text-xxs xxs:text-xs xs:text-sm">{value}</span>
        {MAP[value] && (
          <>
            <span className="text-sm xxs:text-lg xs:text-xl font-bold">
              {MAP[value].letter}
            </span>
            <span className="text-xxs xxs:text-xs xs:text-sm">
              {MAP[value].letter2}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

interface SpecialRowItemProps {
  title: "천간" | "지지";
  data: Data;
}
function SpecialRowItem({ title, data }: SpecialRowItemProps) {
  return (
    <div className={`grid grid-cols-5 ${title === "천간" && "border-b"}`}>
      <div className="py-3 flex justify-center items-center border-r-2 text-xxs xxs:text-xs xs:text-sm">
        {title}
      </div>
      {/* 값 */}
      {COLUMN_KEYS.map((v, i) => (
        <div
          key={v}
          className={`flex flex-col p-1 justify-center items-center gap-3 bg-white border-r ${
            i === 3 ? "border-[#ffffff00]" : "border-gray-400"
          }`}
        >
          <BoxView value={data[v] ?? null} />
        </div>
      ))}
    </div>
  );
}

interface SpecialRowProps {
  data1: Data;
  data2: Data;
}
// 테이블의 한 줄을 출력(천간, 지지)
export default function SpecialRow({ data1, data2 }: SpecialRowProps) {
  return (
    <div className="border-b-2 border-r-2 text-center">
      {/* 천간 */}
      <SpecialRowItem title="천간" data={data1} />
      {/* 지지 */}
      <SpecialRowItem title="지지" data={data2} />
    </div>
  );
}
