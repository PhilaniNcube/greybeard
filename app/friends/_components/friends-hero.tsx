/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";

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
        <div className="flex items-center h-full justify-start">
          <div className="hidden lg:block -translate-x-[110px]">
            <h1 className="text-4xl rotate-90 lg:text-7xl uppercase text-white font-extrabold tracking-wider line-height-7">
              Friends <br />
              Of Grey
            </h1>
          </div>
          <div className="flex-1 flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {friends.map((item, index) => (
              <div key={index}>
                <div className="linear-gradient aspect-square relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover object-center w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Button type="button" className="bg-transparent border-4 border-white rounded-full text-white">
                      Book Bow
                    </Button>
                  </div>
                </div>
                <h2 className="text-white text-2xl font-bold uppercase text-center">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FirendsHero;
