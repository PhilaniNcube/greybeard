/* eslint-disable @next/next/no-img-element */
"use client"
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { agrandir } from "@/app/fonts";

const friends = [
  {
    name: "Stino Le Thewnny",
    image: "/images/stino.webp",
  },
  {
    name: "Sipho Muchindu",
    image: "/images/sipho.webp",
  },
  {
    name: "Heavy K",
    image: "/images/heavyk.png",
  },
  {
    name: "The Black Wendy",
    image: "/images/wendy.webp",
  },
  {
    name: "Henny Be Lit",
    image: "/images/henry.webp",
  },
  {
    name: "Fort Noks",
    image: "/images/noks.webp",
  }
]

const FirendsHero = () => {
  return (
    <section className="pt-20">
      <div className="container h-screen">
        <div className="flex items-center justify-start h-full">
          <div className="hidden lg:block -translate-x-[110px]">
            <motion.h1
              initial={{ opacity: 0, color: "#000000" }}
              animate={{ opacity: 1, color: "#ffffff" }}
              transition={{ duration: 1.6 }}
              className={cn(
                "text-4xl font-extrabold tracking-wider text-white uppercase rotate-90 lg:text-7xl line-height-7"
              ,agrandir.className)}
            >
              Friends <br />
              Of Grey
            </motion.h1>
          </div>
          <div className="grid flex-1 flex-shrink-0 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {friends.map((item, index) => (
              <div key={index}>
                <div className="relative linear-gradient aspect-square group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover object-center w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                    <Button
                      type="button"
                      className="text-white bg-transparent border-4 border-white rounded-full"
                    >
                      Book Bow
                    </Button>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-white uppercase">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FirendsHero;
