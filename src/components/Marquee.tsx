const TEXT =
  "RESIDENTIAL · COMMERCIAL · INDUSTRIAL · RENOVATION · INTERIOR DESIGN · TURNKEY PROJECTS · ";

export default function Marquee() {
  return (
    <div className="w-full bg-gold overflow-hidden py-3.5">
      <div className="marquee-track">
        <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-black whitespace-nowrap pr-4">
          {TEXT.repeat(4)}
        </span>
        <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-black whitespace-nowrap pr-4">
          {TEXT.repeat(4)}
        </span>
      </div>
    </div>
  );
}
