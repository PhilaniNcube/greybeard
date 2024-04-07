/* eslint-disable @next/next/no-img-element */
"use client"
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { agrandir } from "@/app/fonts";

const friends = [
  {
    name: "Stino Le Thwenny",
    image: "/images/friends/stino.png",
  },
  {
    name: "Sipho Muchindu",
    image: "/images/friends/sipho.png",
  },
  {
    name: "Heavy K",
    image: "/images/friends/heavy.png",
  },
  {
    name: "Just 6",
    image: "/images/friends/just-6.png",
  },
  {
    name: "Henny Be Lit",
    image: "/images/friends/henny.png",
  },
  {
    name: "Mjazz",
    image: "/images/friends/mjazz.png",
  }
]

const FirendsHero = () => {
  return (
    <section className="pt-20">
      <div className="container min-h-screen">
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
          <div className="grid flex-1 flex-shrink-0 grid-cols-1 gap-10 py-20 sm:grid-cols-2 lg:grid-cols-3">
            {friends.map((item, index) => (
              <div key={item.name} className="w-full">
                <div className="relative isolate aspect-square group">
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
