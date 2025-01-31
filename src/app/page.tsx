// app/page.tsx
import MotionWrapper from "@/components/motionWrapper/motionWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MotionWrapper>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-murecho)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold">ホーム</h1>
          <p className="text-lg">以下のリンクからページ遷移できます。</p>
          <div className="flex flex-col gap-4">
            <Link
              href="/test1"
              className="text-blue-500 hover:underline"
            >
              テスト1 ページへ
            </Link>
            <Link
              href="/test2"
              className="text-blue-500 hover:underline"
            >
              テスト2 ページへ
            </Link>
          </div>
        </main>
      </div>
    </MotionWrapper>
  );
}