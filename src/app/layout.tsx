import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "운세박사",
  description: "운세박사",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
