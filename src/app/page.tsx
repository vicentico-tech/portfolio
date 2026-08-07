import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { DigitalTwinLoader } from "@/components/DigitalTwinLoader";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function Page() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <DigitalTwinLoader />
    </>
  );
}
