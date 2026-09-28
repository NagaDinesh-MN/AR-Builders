import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-serif text-gold text-2xl">AR</span>
            <span className="font-sans text-[10px] tracking-[0.25em] text-muted uppercase">
              Builders
            </span>
          </div>
          <p className="text-white/40 text-sm mb-6">
            Building Excellence Since 2006
          </p>
          <div className="flex gap-4 text-xs uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-gold" data-cursor-hover>
              Instagram
            </a>
            <a href="#" className="hover:text-gold" data-cursor-hover>
              LinkedIn
            </a>
            <a href="#" className="hover:text-gold" data-cursor-hover>
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4 className="label mb-5">Navigate</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <Link to="/" className="hover:text-gold" data-cursor-hover>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#projects" className="hover:text-gold" data-cursor-hover>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/#about" className="hover:text-gold" data-cursor-hover>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold" data-cursor-hover>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Industrial</li>
            <li>Interior Design</li>
            <li>Renovation</li>
          </ul>
        </div>

        <div>
          <h4 className="label mb-5">Reach Us</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>Chennai, Tamil Nadu, India</li>
            <li>
              <a href="tel:+919840012345" className="hover:text-gold" data-cursor-hover>
                +91 98400 12345
              </a>
            </li>
            <li>
              <a href="mailto:info@arbuilders.in" className="hover:text-gold" data-cursor-hover>
                info@arbuilders.in
              </a>
            </li>
            <li>Mon–Sat: 9AM – 7PM IST</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-white/25">
        <span>© 2025 AR Builders. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}
