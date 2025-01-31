// app/template.tsx
import MotionWrapper from "@/components/motionWrapper/motionWrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return <MotionWrapper>{children}</MotionWrapper>;
}