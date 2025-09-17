// constants/columns.ts
// 사주 테이블의 타입
export const COLUMN_KEYS = ["time", "date", "month", "year"] as const;
export type ColumnKey = (typeof COLUMN_KEYS)[number];

export const COLUMN_LABELS: Record<ColumnKey, string> = {
  time: "時",
  date: "日",
  month: "月",
  year: "年",
};
