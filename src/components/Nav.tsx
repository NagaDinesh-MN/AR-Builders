import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/#projects" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-gold/15"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          <Link to="/" className="flex items-baseline gap-2" data-cursor-hover>
            <span className="font-serif text-gold text-2xl">AR</span>
            <span className="font-sans text-[10px] tracking-[0.25em] text-muted uppercase">
              Builders
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                data-cursor-hover
                className="group relative text-[13px] uppercase tracking-[0.15em] text-white/65 hover:text-gold transition-colors"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            data-cursor-hover
            className="btn-fill hidden md:inline-block border border-gold/50 text-gold text-[13px] uppercase tracking-[0.1em] px-6 py-2.5 hover:text-black transition-colors duration-300"
          >
            <span className="relative z-10">Start a Project →</span>
          </Link>

          <button
            className="md:hidden text-gold text-sm uppercase tracking-widest"
            onClick={() => setOpen(true)}
            data-cursor-hover
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-gold text-3xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-white hover:text-gold"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {location.pathname && null}
    </>
  );
}
