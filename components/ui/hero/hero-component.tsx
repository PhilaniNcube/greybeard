"use client"
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {AnimatePresence, motion} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [
  {
    title: "Event Management",
    image: "/images/club.png",
  },
  {
    title: "Talent Management",
    image: "/images/rapper.png",
  },
  {
    title: "Digital Marketing",
    image: "/images/group.png",
  },
]



const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);



  const loaderRef = useRef(null);

const stripeOneRef = useRef(null);
const stripeTwoRef = useRef(null);
const stripeThreeRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out" },
    });

   tl.to(stripeOneRef.current, {
     duration: 1.5,
     translateY: "-100%",
     height: 0,
     stagger: 0.25,
     delay: 0.5,
     zIndex: -10,
     ease: "power2.inOut",
   })
     .to(stripeTwoRef.current, {
       duration: 1.5,
       height: 0,
       translateY: "-100%",
       stagger: 0.25,
       opacity: 0,
       delay: 0.5,
       zIndex: -10,
       ease: "power2.inOut",
     })
     .to(stripeThreeRef.current, {
       duration: 1.5,
       translateY: "-100%",
       height: 0,
       stagger: 0.25,
       delay: 0.5,
       zIndex: -10,
       ease: "power2.inOut",
     }).then(() => setLoading(false));

  }, []);



  return (
    <section className="relative h-screen overflow-hidden">
      {loading && (
        <div
          ref={loaderRef}
          className={cn("absolute inset-0 z-30 h-full w-full grid grid-cols-3")}
        >
          <div
            ref={stripeOneRef}
            id="strip-1"
            className="w-full h-full bg-black"
          ></div>
          <div
            ref={stripeTwoRef}
            id="strip-2"
            className="flex items-center justify-center w-full h-full bg-black"
          >
            <Image
              ref={stripeTwoRef}
              src="/images/white-logo.png"
              width={1323}
              height={542}
              alt="logo"
            />
          </div>
          <div
            ref={stripeThreeRef}
            id="strip-3"
            className="w-full h-full bg-black"
          ></div>
        </div>
      )}

      <div className="relative flex w-full h-[100vh] bg-black isolate overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            layoutId={`${currentSlide}`}
            initial={{
              scale: 0.8,
              skewX: "-5deg",
              x: "100%",
            }}
            animate={{
              scale: 1,
              x: 0,
              skewX: "0deg",
            }}
            exit={{ scale: 0.8, x: "-100%", skewX: "5deg" }}
            translate="yes"
            transition={{
              duration: 0.8,
            }}
            className="absolute w-full h-full isolate"
          >
            <Image
              src={slides[currentSlide].image}
              width={1920}
              height={1280}
              alt={slides[currentSlide].title}
              className="object-cover object-center w-full h-full shrink-0 grow-0"
            />
            <h2 className="absolute top-[50%] left-[50%]  text-3xl lg:text-6xl font-bold -translate-x-[50%] -translate-y-[50%] w-fit text-white ">
              {slides[currentSlide].title}
            </h2>
          </motion.div>
        </AnimatePresence>
        <div className="absolute z-40 flex items-center justify-center w-full gap-x-4 bottom-5">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="z-auto h-2 transition-all duration-300 ease-in-out rounded-full cursor-pointer w-7 lg:w-11 bg-slate-300 hover:bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
