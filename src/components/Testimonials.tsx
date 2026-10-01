import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-[700px] mx-auto mb-16">
          <span className="label block mb-6">Client Voices</span>
          <h2 className="font-serif text-black text-[36px] md:text-[54px] leading-[1.1]">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                className="bg-white border border-[#EDE8DF] p-10 h-full flex flex-col"
                whileHover={{ y: -6, borderColor: "rgba(200,169,110,0.5)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span
                  className="font-serif text-[80px] leading-none mb-2"
                  style={{ color: "rgba(200,169,110,0.2)" }}
                >
                  "
                </span>
                <p className="font-serif italic text-[#1A1A1A] text-[20px] leading-[1.5] mb-8 flex-1">
                  {t.quote}
                </p>
                <div className="h-[2px] w-8 bg-gold mb-4" />
                <p className="font-sans text-black text-sm font-semibold mb-1">
                  {t.name}
                </p>
                <p className="font-sans text-muted text-[13px] mb-3">
                  {t.detail}
                </p>
                <span className="text-gold text-sm">★★★★★</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
