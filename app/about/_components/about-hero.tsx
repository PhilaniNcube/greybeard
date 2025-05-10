"use client"

import { agrandir } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
        className="absolute inset-0 object-cover object-right w-full h-dvh aspect-video"
      />
      <div className="container h-dvh py-20 flex flex-col lg:translate-x-[250px] justify-center relative">
        <h1
          
          className={cn(
            "text-4xl lg:text-7xl text-white uppercase mb-6 font-extrabold tracking-wider",
            agrandir.className
          )}
        >
          About
          <span className="ml-2 outline-text"> us</span>
        </h1>
        <p
          
          className="w-full mb-6 text-lg font-medium leading-7 text-white md:text-lg lg:text-xl md:w-2/5 text-balance"
        >
          Greybeard is a boutique events and talent management agency that
          thrives on providing a platform for brands and talent to collaborate
          through music, events, and digital marketing. We believe the synergy
          between a creative&apos;s journey and the right brand is the
          cornerstone of a progressive urban culture that benefits all.
        </p>
        <div
          
        >
          <Button className="px-4 mt-2 text-xl font-bold text-white uppercase rounded-full w-fit bg-gradient-to-r from-sky-600 via-purple-500 to-indigo-800">
            <Link href="#what-we-do">Read More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
