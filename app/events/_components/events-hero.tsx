"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { oswald } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

const Hero = () => {
  const component = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("h1", {
        y: -130,
        opacity: 0,
        ease: "easeInOut",
        duration: 1.5,
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="relative">
      <Image
        src="/images/festival.png"
        width={1456}
        height={816}
        alt="Creative Corner"
        className="w-full aspect-video object-cover lg:aspect-[5/2]"
      />
      <div className="absolute inset-0 bg-slate-800/40">
        <div className="container h-full flex flex-col gap-y-5 items-center justify-center py-10">
          <div className="w-fit overflow-clip">
            <h1
              className={cn(
                "text-[3rem] lg:text-[6rem] uppercase font-extrabold",
                oswald.className
              )}
            >
              Events Management
            </h1>
          </div>
          <Link href="/contact" className={oswald.className}>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-200 rounded-none uppercase font-medium text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
