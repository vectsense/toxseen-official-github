// app/page.tsx
// import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import LinkButton from "@/components/heroui/linkButton";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-murecho)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">ホーム</h1>
        <p className="text-lg">以下のリンクからページ遷移できます。</p>
        <div className="flex flex-col gap-4">
        <LinkButton href="/test1" text="テスト1 ページへ" />
        <LinkButton href="/test2" text="テスト2 ページへ" />

        </div>
      </main>

    </div>
  );
}
