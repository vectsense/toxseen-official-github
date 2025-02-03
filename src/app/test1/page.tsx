// app/test1/page.tsx
"use client";
import {Button, ButtonGroup} from "@heroui/button";
import Link from "next/link";

export default function Test1Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">テスト1 ページ</h1>
      <p className="mt-4">これはテスト1のページです。</p>
      <Link
        href="/"
        className="mt-8 text-blue-500 hover:underline"
      >
        ホームに戻る
      </Link>
      <ButtonGroup>
        <Button>ボタン1</Button>
        <Button>ボタン2</Button>
        <Button>ボタン3</Button>
      </ButtonGroup>
    </div>

  );
}