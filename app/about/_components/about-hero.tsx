import { archivo } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/globe.webp"
        width={5920}
        height={3944}
        alt="Background"
        className="absolute inset-0 w-full h-screen aspect-video object-right  object-cover"
      />
      <div className="container h-screen py-20 flex flex-col translate-x-[250px] justify-center relative">
        <h1
          className={cn(
            "text-4xl lg:text-7xl text-white uppercase mb-6 font-extrabold tracking-wider",
            archivo.className
          )}
        >
          About
          <span className="outline-text">us</span>{" "}
        </h1>
        <p className="text-lg md:text-lg lg:text-xl font-medium mb-6 leading-7 text-white w-full md:w-2/5 text-balance">
          Greybeard is a boutique events and talent management agency that
          thrives on providing a platform for brands and talent to collaborate
          through music, events, and digital marketing. We believe the synergy
          between a creative&apos;s journey and the right brand is the
          cornerstone of a progressive urban culture that benefits all.
        </p>
          <Button className="rounded-full w-fit bg-gradient-to-r from-sky-600 via-purple-500 to-indigo-800 text-white uppercase font-bold text-xl mt-2 px-4">
        <Link href="#">
            Read More
        </Link>
          </Button>
      </div>
    </section>
  );
};
export default AboutHero;
