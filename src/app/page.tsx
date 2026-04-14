import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Story from "@/components/sections/Story";
import BentoGallery from "@/components/sections/BentoGallery";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Stats />
      <BentoGallery />
      <Footer />
    </main>
  );
}
