"use client";
import { motion } from "framer-motion";

export default function DynamicBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* 動的な線形グラデーション */}
            <motion.div
                className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_5.3%,black)]"
                style={{ transformOrigin: "center" }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    scale: [5, 4.9, 5],
                    // rotate: 360, // 追加: 360度回転
                    backgroundColor: ["#11e59c", "#F97316", "#EF4444","#5b6ec2","#111669","#00ace4","#11e59c"],
                }}
                transition={{
                  backgroundPosition: { duration: 40, repeat: Infinity, ease: "linear" }, // 背景移動
                  // rotate: { duration: 600, repeat: Infinity, ease: "linear" }, // 回転速度を遅く
                  scale: { duration: 60, repeat: Infinity, ease: "linear" }, // スケール変化
                  backgroundColor: { duration: 30, repeat: Infinity, ease: "linear" }, // グラデーション変化
                }}
            >
<div className="h-full w-full [background-image:repeating-linear-gradient(90deg,#EF4444_0%,#22C55E_1px,transparent_1px,transparent_0.03%)] opacity-50" />
            </motion.div>
        </div>
    );
}