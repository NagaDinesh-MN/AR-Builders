import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { impactStats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: count, done } = useCountUp(value, 2000);
  return (
    <div ref={ref}>
      <motion.div
        className="font-serif text-black text-[52px] md:text-[64px] leading-none"
        animate={done ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="font-sans text-black text-[12px] uppercase tracking-[0.15em] mt-2">
        {label}
      </div>
    </div>
  );
}

export default function StatsSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      <div className="bg-black flex items-center px-8 md:px-16 py-20">
        <Reveal>
          <h2 className="font-serif text-white text-[36px] md:text-[48px] leading-[1.1] mb-6">
            Numbers That Speak
            <br />
            For Themselves.
          </h2>
          <p className="text-muted font-light max-w-[380px]">
            Two decades of building trust, one project at a time.
          </p>
        </Reveal>
      </div>
      <div className="bg-gold flex items-center px-8 md:px-16 py-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 w-full">
          {impactStats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
