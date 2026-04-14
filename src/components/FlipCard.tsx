import { useState, type ReactNode } from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Icon animation presets ───────────────────────────────────────
export type IconAnim = "float" | "pulse" | "spin" | "bounce" | "breathe";

export const iconAnimPresets: Record<IconAnim, TargetAndTransition> = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
  },
  pulse: {
    scale: [1, 1.18, 1],
    opacity: [0.85, 1, 0.85],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  spin: {
    rotate: [0, 360],
    transition: { duration: 9, repeat: Infinity, ease: "linear" },
  },
  bounce: {
    y: [0, -12, 2, -6, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  breathe: {
    scale: [1, 1.08, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── AnimatedIcon ─────────────────────────────────────────────────
interface AnimatedIconProps {
  Icon: LucideIcon;
  animation: IconAnim;
  size?: number;
  className?: string;
}

export const AnimatedIcon = ({
  Icon,
  animation,
  size = 44,
  className = "text-primary",
}: AnimatedIconProps) => (
  <motion.div animate={iconAnimPresets[animation]} style={{ display: "flex" }}>
    <Icon size={size} className={className} />
  </motion.div>
);

// ── FlipCard ─────────────────────────────────────────────────────
interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export const FlipCard = ({ front, back, className }: FlipCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative cursor-default select-none", className)}
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {front}
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
