// models/Data.ts
// 사주 테이블의 타입
import { ColumnKey } from "@/constants/columns";

export type Attribute =
  | "십성1"
  | "천간"
  | "지지"
  | "십성2"
  | "십이운성"
  | "십이신살"
  | "귀인";

export type Data = {
  [key in ColumnKey]?: string | string[] | null;
};
