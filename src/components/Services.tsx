import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-[700px] mx-auto mb-16">
          <span className="label block mb-6">What We Build</span>
          <h2 className="font-serif text-white text-[36px] md:text-[60px] leading-[1.1]">
            Every Structure Tells a Story of Excellence
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                className="relative bg-deep border-t-2 border-gold px-9 py-10 h-full overflow-hidden"
                whileHover={{ y: -6, backgroundColor: "#1A1A1A" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span
                  className="absolute top-2 right-4 font-serif text-[72px] leading-none select-none"
                  style={{ color: "rgba(200,169,110,0.15)" }}
                >
                  {s.num}
                </span>
                <h3 className="font-sans text-white text-[15px] uppercase tracking-[0.1em] mb-4 relative z-10 max-w-[80%]">
                  {s.title}
                </h3>
                <p className="text-muted font-light text-[14px] leading-[1.8] relative z-10 max-w-[85%]">
                  {s.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
