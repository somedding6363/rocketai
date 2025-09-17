// features/home/components/TableSection/Table.tsx
// 사주 테이블을 출력하는 컴포넌트
import TableHeader from "./TableHeader";
import Row from "./Row";
import SpecialRow from "./SpecialRow";
import { Attribute, Data } from "@/models/Data";

export default function Table() {
  // 임의 데이터
  const data: { [key in Attribute]: Data } = {
    "십성1": { time: "예시", date: "예시", month: "예시", year: "예시" },
    "천간": { time: "가", date: "나", month: "다", year: "가" },
    "지지": { time: "나", date: "다", month: "가", year: "나" },
    "십성2": { time: "예시", date: "예시", month: "예시", year: "예시" },
    "십이운성": { time: "예시", date: "예시", month: "예시", year: "예시" },
    "십이신살": { time: "예시", date: "예시", month: "예시", year: "예시" },
    "귀인": {
      time: null,
      date: null,
      month: ["예시"],
      year: ["예시", "예시", "예시"],
    },
  };
  return (
    <div className="px-5 py-10">
      {/* 시, 일, 월, 년 */}
      <TableHeader />
      {/* 십성 */}
      <Row title="십성" data={data.십성1 ?? {}} />
      {/* 천간, 지지 */}
      <SpecialRow data1={data.천간 ?? {}} data2={data.지지 ?? {}} />
      {/* 십성 */}
      <Row title="십성" data={data.십성2 ?? {}} />
      {/* 십이운성 */}
      <Row title="십이운성" data={data.십이운성 ?? {}} />
      {/* 십이신살 */}
      <Row title="십이신살" data={data.십이신살 ?? {}} />
      {/* 귀인 */}
      <Row title="귀인" data={data.귀인 ?? {}} />
    </div>
  );
}
