// app/template.tsx
// "use client";
import MotionWrapper from "@/components/animations/motionWrapper";
// import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  // const isNoAnimationPage = pathname === "/*";

  // if (isNoAnimationPage) {
  //   return children;
  // }

  return <MotionWrapper>{children}</MotionWrapper>;
  // return <div>{children}</div>;
  // return children;
}
