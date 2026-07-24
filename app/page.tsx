import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Classes } from "@/components/Classes";
import { Coaches } from "@/components/Coaches";
import { Achievements } from "@/components/Achievements";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Classes />
        <Coaches />
        <Achievements />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
