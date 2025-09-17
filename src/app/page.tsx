import WebtoonSection from "@/features/home/components/WebtoonSection";
import TableSection from "@/features/home/components/TableSection";

export default function Home() {
  return (
    <main className="max-w-md mx-auto relative bg-(--main)">
      <WebtoonSection />
      <TableSection />
    </main>
  );
}
