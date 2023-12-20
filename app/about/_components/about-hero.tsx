import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative">
      <Image
        src="/images/globe.webp"
        width={5920}
        height={3944}
        alt="Background"
        className="absolute inset-0 w-full h-screen aspect-video object-cover"
      />
      <div className="container h-screen py-20 flex flex-col justify-center relative">
        <h1 className="text-4xl lg:text-7xl text-white uppercase font-extrabold tracking-wider">
          About
          <span className="outline-text">us</span>{" "}
        </h1>
        <p className="text-lg md:text-lg lg:text-xl font-medium leading-7 text-white w-full md:w-2/5 text-balance">
          Greybeard is a boutique events and talent management agency that
          thrives on providing a platform for brands and talent to collaborate
          through music, events, and digital marketing. We believe the synergy
          between a creative&apos;s journey and the right brand is the
          cornerstone of a progressive urban culture that benefits all.
        </p>
        <Link href="#">
          <Button className="rounded-full bg-gradient-to-r from-sky-600 via-purple-500 to-indigo-800 text-white uppercase font-bold text-xl mt-6 px-4">Read More</Button>
        </Link>
      </div>
    </section>
  );
};
export default AboutHero;
