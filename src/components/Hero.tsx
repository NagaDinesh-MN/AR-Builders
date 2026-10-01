import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: count, done } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-left">
      <motion.div
        className="font-serif text-gold text-3xl md:text-4xl"
        animate={done ? { scale: [1, 1.12, 1] } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="ken-burns absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.92) 45%, rgba(10,10,10,0.3) 100%)",
        }}
      />

      {/* pt-28/pt-36 reserves space for the fixed nav so hero content can
          never render behind it, at any zoom level or viewport height */}
      <div className="relative min-h-screen max-w-[1600px] mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 flex flex-col justify-center">
        <div className="max-w-[620px] pl-0 md:pl-[2%]">
          <motion.span
            className="label block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Building Chennai's Future
          </motion.span>

          <motion.h1
            className="font-serif font-light text-white text-[42px] md:text-[80px] leading-[1.05] -tracking-[0.02em] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Crafted With
            <br />
            Precision.
            <br />
            Built to Last.
          </motion.h1>

          <motion.p
            className="text-white/60 text-base md:text-[17px] font-light max-w-[480px] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            AR Builders brings together architectural vision and engineering
            excellence to create structures that define Chennai's skyline for
            generations.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <Link
              to="/#projects"
              data-cursor-hover
              className="btn-fill bg-black border border-gold text-gold text-[13px] uppercase tracking-[0.1em] px-8 py-3.5 hover:text-black transition-colors duration-300"
            >
              <span className="relative z-10">View Our Projects</span>
            </Link>
            <Link
              to="/contact"
              data-cursor-hover
              className="group text-white text-[13px] uppercase tracking-[0.1em] relative"
            >
              Get In Touch →
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <StatItem {...s} />
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-gold/30" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2 w-[280px] p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(200,169,110,0.2)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="label block mb-3">Latest Project</span>
          <h4 className="font-serif text-white text-[22px] mb-1">
            The Adyar Residence
          </h4>
          <p className="font-sans text-[13px] text-muted">Adyar, Chennai</p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
