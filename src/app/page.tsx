import Image from "next/image";

import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
