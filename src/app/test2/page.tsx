// app/test2/page.tsx
import Link from "next/link";

export default function Test2Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">テスト2 ページ</h1>
      <p className="mt-4">これはテスト2のページです。</p>
      <Link
        href="/"
        className="mt-8 text-blue-500 hover:underline"
      >
        ホームに戻る
      </Link>
    </div>
  );
}