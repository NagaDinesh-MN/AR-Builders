import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" className="bg-offwhite py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="label block mb-6">Who We Are</span>
          <h2 className="font-serif text-black text-[36px] md:text-[54px] leading-[1.1] mb-8">
            Architecture is the art of how to waste space, wisely.
          </h2>
          <p className="text-[#4A4A44] font-light text-[16px] mb-6 max-w-[520px]">
            Founded with a vision to redefine construction standards in
            Chennai, AR Builders has spent over a decade perfecting the art of
            building. Every structure we create is a testament to our
            commitment to quality, precision, and the timeless pursuit of
            excellence.
          </p>
          <p className="text-[#4A4A44] font-light text-[16px] mb-8 max-w-[520px]">
            We don't just construct buildings — we craft legacies. From the
            foundation to the final finishing, every detail is handled with
            the same care and expertise that has made us Chennai's most
            trusted builder.
          </p>
          <a href="#projects" data-cursor-hover className="group text-gold text-sm uppercase tracking-widest relative">
            Our Story →
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </a>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gold z-10" />
          <motion.div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <motion.img
              style={{ y }}
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
              alt="Architecture"
              className="w-full h-[130%] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
