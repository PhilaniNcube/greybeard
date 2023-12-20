import Image from "next/image";
import HomeCarousel from "./home-carousel";

const HomeHero = () => {
  return <section className="relative">
    <Image src="/images/globe.webp" width={5920} height={3944} alt="Background" className="absolute inset-0 w-full h-screen aspect-video object-cover" />
      <HomeCarousel />
  </section>;
};
export default HomeHero;
