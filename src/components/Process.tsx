import Reveal from "./Reveal";
import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-[700px] mx-auto mb-20">
          <span className="label block mb-6">Our Process</span>
          <h2 className="font-serif text-white text-[36px] md:text-[54px] leading-[1.1]">
            From Vision to Reality, Every Step Perfected
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gold/25" />
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="relative">
                <span className="font-serif text-gold text-[48px] block mb-4 bg-black relative z-10 w-fit">
                  {step.num}
                </span>
                <h3 className="font-sans text-white text-[16px] uppercase tracking-[0.12em] mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-[14px] leading-[1.7] font-light max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
