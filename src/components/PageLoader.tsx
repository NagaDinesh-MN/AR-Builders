import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const letters = "BUILDERS".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.h1
            className="font-serif text-gold text-6xl md:text-8xl font-light tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            AR
          </motion.h1>

          <motion.div
            className="h-px bg-gold mt-6"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          />

          <div className="flex mt-6 overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-white text-xs tracking-[0.4em] font-sans"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
