import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carouselSlides } from "../data/content";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(((next % carouselSlides.length) + carouselSlides.length) % carouselSlides.length);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % carouselSlides.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const slide = carouselSlides[index];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 55%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-16">
            <span className="label block mb-3">{slide.label}</span>
            <h3 className="font-serif text-white text-[32px] md:text-[52px] leading-[1.1] mb-2 max-w-[700px]">
              {slide.title}
            </h3>
            <p className="text-muted font-light text-sm max-w-[500px]">
              {slide.desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => goTo(index - 1)}
        data-cursor-hover
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full text-gold font-serif text-3xl hover:bg-gold/15 transition-colors z-10"
      >
        ←
      </button>
      <button
        onClick={() => goTo(index + 1)}
        data-cursor-hover
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full text-gold font-serif text-3xl hover:bg-gold/15 transition-colors z-10"
      >
        →
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            data-cursor-hover
            className={`h-1.5 rounded-full bg-gold transition-all duration-300 ${
              i === index ? "w-4 opacity-100" : "w-1.5 opacity-40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
