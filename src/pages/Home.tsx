import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import Carousel from "../components/Carousel";
import Process from "../components/Process";
import StatsSplit from "../components/StatsSplit";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <FeaturedProjects />
      <Carousel />
      <Process />
      <StatsSplit />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
