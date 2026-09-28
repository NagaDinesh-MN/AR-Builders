import Reveal from "./Reveal";
import { featuredProjects } from "../data/content";

function Card({ project, className = "" }: { project: (typeof featuredProjects)[number]; className?: string }) {
  return (
    <div
      data-cursor-hover
      className={`group relative overflow-hidden ${className}`}
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-500" />
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="label block mb-2">{project.category}</span>
        <h4 className="font-serif text-white text-[22px] md:text-[26px] mb-1">
          {project.name}
        </h4>
        <p className="text-muted text-[13px] mb-2">{project.location}</p>
        <span className="text-gold text-sm uppercase tracking-widest">
          View Project →
        </span>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const p = featuredProjects;

  return (
    <section id="projects" className="bg-cream py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-[700px] mx-auto mb-16">
          <span className="label block mb-6">Our Work</span>
          <h2 className="font-serif text-black text-[36px] md:text-[54px] leading-[1.1]">
            Projects That Define Chennai
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <Card project={p[0]} className="md:col-span-1 md:row-span-2 h-[320px] md:h-[640px]" />
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card project={p[1]} className="h-[300px]" />
              <Card project={p[2]} className="h-[300px]" />
              <Card project={p[3]} className="h-[300px]" />
              <Card project={p[4]} className="h-[300px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card project={p[4]} className="h-[260px]" />
            <Card project={p[1]} className="h-[260px]" />
            <Card project={p[3]} className="h-[260px]" />
          </div>
        </Reveal>

        <div className="text-center mt-16">
          <a
            href="#"
            data-cursor-hover
            className="btn-fill border border-gold text-gold text-[13px] uppercase tracking-[0.1em] px-8 py-3.5 inline-block hover:text-black transition-colors duration-300"
          >
            <span className="relative z-10">View All Projects →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
