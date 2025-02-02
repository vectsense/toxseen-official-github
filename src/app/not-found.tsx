import NotFoundSvg from "@/lib/svgs/NotFoundSvg";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-100 via-yellow-100 to-cyan-100 text-transparent bg-clip-text">ページが見つかりません</h1>
        <p className="text-gray-300 mb-4">
          お探しのページは存在しないか、移動した可能性があります。
        </p>


        <Link href="/" className="text-blue-500 hover:text-blue-700">
          ホームに戻る
        </Link>

      </div>
      <NotFoundSvg />
    </div>
  );
}
