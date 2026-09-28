import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-black py-24 md:py-[120px]">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <Reveal>
          <span className="label block mb-6">Let's Build Together</span>
          <h2 className="font-serif text-white text-[42px] md:text-[72px] leading-[1.1] mb-8">
            Your Vision. Our Craft.
            <br />
            One Exceptional Result.
          </h2>
          <p className="text-muted font-light max-w-[480px] mx-auto mb-10">
            Ready to start your project? Our team is here to guide you from
            the first sketch to the final key.
          </p>
          <Link
            to="/contact"
            data-cursor-hover
            className="inline-block bg-gold text-black text-[14px] uppercase tracking-[0.12em] px-12 py-[18px] transition-transform duration-300 hover:scale-[1.02]"
          >
            Start a Conversation →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
