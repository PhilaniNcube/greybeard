"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";
import { oswald } from "../fonts";

const AboutUs = () => {

  const aboutRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // create as many GSAP animations and/or ScrollTriggers here as you want...



      gsap.from("h1", {
       scrollTrigger: "#container",
       markers: true,
       start: "top bottom",
        end: "bottom bottom",
        opacity: 0,
        x: "-120%",
        ease: "power3",
        duration: 1.8,
      });

      gsap.from("#about-text-one", {
        scrollTrigger: "#container",
        markers: true,
        start: "top bottom",
        end: "bottom bottom",
        opacity: 0,
        x: "120%",
        ease: "power3",
        duration: 3,
        delay: 0.5,
      });
      gsap.from("#about-text-two", {
        scrollTrigger: "#container",
        markers: true,
        start: "top bottom",
        end: "bottom bottom",
        opacity: 0,
        x: "120%",
        ease: "power3",
        duration: 3,
        delay: 1.1,
      });


    }, aboutRef); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // cleanup!
  },[])


  return (
    <section ref={aboutRef} className="text-white bg-black ">
      <div id="container" className="container py-6 overflow-clip">
        <div className="flex flex-col md:items-start md:flex-row">
          <h1
            id="title"
            className={cn(
              "text-[2rem] md:text-[10rem] uppercase",
              oswald.className
            )}
          >
            About Us
          </h1>
          <div className="flex-1 leading-8 tracking-widest md:px-6">
            <p id="about-text-one" className="font-sans text-lg font-medium">
              Greybeard is a boutique events and talentmanagement agency that
              thrives onproviding a platform for brands and talentto collaborate
              through music, events, anddigital marketing. We believe the
              synergybetween a creative&apos;s journey and the rightbrand is the
              cornerstone of a progressiveurban culture that benefits all.
            </p>
            <p
              id="about-text-two"
              className="mt-2 font-sans text-lg font-medium"
            >
              Our team collectively has over 20 years ofcombined experience in
              the entertainmentindustry and their respective marketingfields. We
              are always ready to help youwith your business goals. We
              understandthat when it comes to your valuablebusiness, you want
              nothing but the best.That is why we give our best shot withevery
              project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
