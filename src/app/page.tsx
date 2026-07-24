import Animations from "@/components/Animations";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Signature from "@/components/sections/Signature";
import Collections from "@/components/sections/Collections";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Instagram from "@/components/sections/Instagram";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Animations />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Signature />
        <Collections />
        <Experience />
        <Testimonials />
        <Instagram />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
