/* eslint-disable @next/next/no-img-element */
"use client"

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import CarouselItem from "./carousel-item";
import { Button } from '@/components/ui/button';

import "swiper/css";
import "swiper/css/navigation";



const artists = [
  {
    name: "Slique",
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
  {
    name: "Uncle Bae",
    image: "/images/bae.png",
    backgroundColor: "bg-gradient-to-r from-green-600 to-green-700",
  },
  {
    name: "Just 6",
    image: "/images/just6.webp",
    backgroundColor: "bg-gradient-to-r from-slate-200 to-slate-400",
  },
  {
    name: "Benjamin",
    image: "/images/benjamin.png",
    backgroundColor: "bg-gradient-to-r from-teal-600 to-teal-700",
  },
  {
    name: "Heavy K",
    image: "/images/heavyk.png",
    backgroundColor: "bg-gradient-to-r from-orange-400 to-orange-700",
  },
  {
    name: "Noks",
    image: "/images/noks.webp",
    backgroundColor: "bg-gradient-to-r from-teal-800 to-teal-950",
  },
  {
    name: "Jack Devero",
    image: "/images/jack.webp",
    backgroundColor: "bg-gradient-to-r from-zinc-500 to-zinc-700",
  },
];


const HomeCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
   const swiper = useSwiper();

   const next = () => {
      setCurrentIndex((index) => index++);
      swiper.slideNext();
   }

  return (
    <div className="relative">
      {" "}
      <div className="container  flex  gap-8 justify-center h-screen overflow-clip items-center relative z-40">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={true}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full relative z-40 mySwiper"
        >
          <div className="w-[80%] mx-auto ">
            {artists.map((artist, index) => (
              <SwiperSlide className='' key={index}>
                <CarouselItem item={artist} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>{" "}
      <h1 className="text-4xl lg:text-7xl text-white uppercase font-extrabold absolute bottom-0 left-20 z-50">
        Where brands <br />
        <span className="outline-text">meet creatives</span>{" "}
      </h1>
    </div>
  );
};
export default HomeCarousel;
