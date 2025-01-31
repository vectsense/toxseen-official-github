import type { Metadata } from "next";
import { Murecho, Nunito_Sans } from "next/font/google";
import "./globals.css";
import DynamicBackground from "@/components/motionWrapper/dynamicBackground";

const murecho = Murecho({
  variable: "--font-murecho",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
// メタデータ
export const metadata: Metadata = {
  title: "毒見部 公式サイト｜Toxseen Official",
  description: "個人開発者のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${murecho.variable} ${nunitoSans.variable} antialiased`}
      >
        {/* 動的背景を追加 */}
        <DynamicBackground />
        {/* 子要素を表示 */}
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
