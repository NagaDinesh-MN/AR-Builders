import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// eases out so the count settles gently instead of landing abruptly
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function useCountUp(target: number, duration = 2000) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const linear = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(linear);
      setValue(Math.floor(eased * target));
      if (linear < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
        setDone(true);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return { ref, value, done };
}
