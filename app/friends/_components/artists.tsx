/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v51WqcESHFp
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Artist from "./artist-card";

const friends = [
  {
    name: "Stino Le Thwenny",
    image: "/images/stinolethwenny.jpeg",
  },
  {
    name: "Heavy K",
    image: "/images/heavy_k.jpg",
  },

  {
    name: "Sipho Muchindu",
    image: "/images/sipho_muchindu.jpg",
  },

  {
    name: "Henny Be Lit",
    image: "/images/henny.jpg",
  },
  {
    name: "The Black Wendy",
    image: "/images/black_wendy.jpg",
  },
  {
    name: "Fort Nox",
    image: "/images/nox.jpg",
  },
];

export default function Friends() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">

        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend, index) => (
            <Artist key={index} artist={friend} />
          ))}
        </div>
      </div>
    </section>
  );
}
