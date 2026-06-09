import { ReactNode, CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h2" | "h3" | "p" | "li";
  y?: number;
}

/** Lightweight scroll-reveal wrapper: fade + translateY on enter. */
export function Reveal({ children, delay = 0, className = "", as = "div", y = 24 }: RevealProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    transform: revealed ? "translateY(0)" : `translateY(${y}px)`,
    opacity: revealed ? 1 : 0,
    transition: `opacity 700ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 800ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
    willChange: "opacity, transform",
  };
  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  );
}

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ to, suffix = "", prefix = "", duration = 1600, className }: CountUpProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { useCountUp } = require("@/hooks/use-reveal");
  const { ref, value } = useCountUp(to, duration);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
