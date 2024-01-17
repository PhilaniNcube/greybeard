/* eslint-disable @next/next/no-img-element */
"use client"


import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';
import { archivo } from '../fonts';
import Link from "next/link";



const artists = [
  {
    name: "Sliqe",
    image: "/images/slique.png",
    backgroundColor: "bg-gradient-to-r from-yellow-600 to-yellow-700",
  },
  {
    name: "Ntosh",
    image: "/images/ntosh.png",
    backgroundColor: "bg-gradient-to-r from-green-300 to-green-700",
  },
  {
    name: "Kele",
    image: "/images/kele.png",
    backgroundColor: "bg-gradient-to-r from-teal-300 to-indigo-500",
  },
  {
    name: "Si Jones",
    image: "/images/sijones.png",
    backgroundColor: "bg-gradient-to-r from-blue-600 to-blue-700",
  },
  // {
  //   name: "Uncle Bae",
  //   image: "/images/bae.png",
  //   backgroundColor: "bg-gradient-to-r from-green-600 to-green-700",
  // },
  // {
  //   name: "Just 6",
  //   image: "/images/just6.webp",
  //   backgroundColor: "bg-gradient-to-r from-slate-200 to-slate-400",
  // },
  {
    name: "Benjamin",
    image: "/images/benjamin.png",
    backgroundColor: "bg-gradient-to-r from-teal-600 to-teal-700",
  },
  // {
  //   name: "Heavy K",
  //   image: "/images/heavyk.png",
  //   backgroundColor: "bg-gradient-to-r from-orange-400 to-orange-700",
  // },
  // {
  //   name: "Noks",
  //   image: "/images/noks.webp",
  //   backgroundColor: "bg-gradient-to-r from-teal-800 to-teal-950",
  // },
  {
    name: "Jack Devero",
    image: "/images/jack.png",
    backgroundColor: "bg-gradient-to-r from-zinc-500 to-zinc-700",
  },
];


const HomeCarousel = () => {



  return (
    <div className="relative">
      {" "}
      <div className="container px-20 flex  gap-8 justify-center h-screen overflow-clip items-center relative z-40">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 ">
            {artists.map((artist, index) => (
              <CarouselItem
                key={index}
                className="relative isolate md:basis-1/2 lg:basis-1/3 group overflow-hidden"
              >
                <img
                  className="w-full object-cover aspect-square group-hover:opacity-70"
                  src={artist.image}
                  alt={artist.name}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:z-50 flex flex-col md:flex-row items-center justify-center">
                  <Link
                    href={`/artists/${artist.name}`}
                    className="text-white text-sm uppercase px-5 py-2 border border-white rounded-full"
                  >
                    About {artist.name}
                  </Link>
                  <Link
                    className="text-white text-sm border border-white rounded-full uppercase px-5 py-2 mt-5 md:mt-0 md:ml-5"
                    href={`/artists/${artist.name}`}
                  >
                    Book Now
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent text-white border-none h-8 w-8" />
          <CarouselNext className="bg-transparent text-white border-none h-8 w-8" />
        </Carousel>
      </div>{" "}
      <h1
        className={cn(
          "text-4xl lg:text-6xl text-white uppercase font-extrabold absolute bottom-0 left-20 z-50",
          archivo.className
        )}
      >
        Where brands <br />
        <span className="outline-text">meet creatives</span>{" "}
      </h1>
    </div>
  );
};
export default HomeCarousel;
