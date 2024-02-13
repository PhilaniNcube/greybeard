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
import { agrandir } from '../fonts';
import Link from "next/link";
import { motion } from "framer-motion";



const artists = [
  {
    name: "Sliqe",
    slug: "sliqe",
    image: "/images/slique.png",
    backgroundColor: "bg-gradient-to-r from-yellow-600 to-yellow-700",
  },
  {
    name: "Ntosh",
    slug: "ntosh",
    image: "/images/ntosh.png",
    backgroundColor: "bg-gradient-to-r from-green-300 to-green-700",
  },
  {
    name: "Kele",
    slug: "kele",
    image: "/images/kele.png",
    backgroundColor: "bg-gradient-to-r from-teal-300 to-indigo-500",
  },
  {
    name: "Si Jones",
    slug: "si-jones",
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
  // {
  //   name: "Benjahmin",
  //   slug: "benjamin",
  //   image: "/images/benjamin.png",
  //   backgroundColor: "bg-gradient-to-r from-teal-600 to-teal-700",
  // },
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
    slug: "jack",
    image: "/images/jack.png",
    backgroundColor: "bg-gradient-to-r from-zinc-500 to-zinc-700",
  },
];


const HomeCarousel = () => {



  return (
			<div className="relative overflow-hidden">
				{" "}
				<div className="container relative z-40 flex items-center justify-center h-screen gap-8 px-20 overflow-clip">
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
									key={artist.name}
									className="relative overflow-hidden isolate md:basis-1/2 lg:basis-1/3 group"
								>
									<img
										className="object-cover w-full aspect-square group-hover:opacity-70"
										src={artist.image}
										alt={artist.name}
									/>
									<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:z-50 md:flex-row">
										<Link
											href={`/artists/${artist.slug}`}
											className="px-5 py-2 text-sm text-white uppercase border border-white rounded-full"
										>
											About {artist.name}
										</Link>
										<Link
											className="px-5 py-2 mt-5 text-sm text-white uppercase border border-white rounded-full md:mt-0 md:ml-5"
											href="/contact"
										>
											Book Now
										</Link>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="w-8 h-8 text-white bg-transparent border-none" />
						<CarouselNext className="w-8 h-8 text-white bg-transparent border-none" />
					</Carousel>
				</div>{" "}
				<motion.h1
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.6 }}
					className={cn(
						"text-4xl lg:text-6xl text-white uppercase font-extrabold absolute bottom-0 left-20 z-50",
						agrandir.className,
					)}
				>
					Where brands <br />
					<span className="outline-text">meet creatives</span>{" "}
				</motion.h1>
			</div>
		);
};
export default HomeCarousel;
