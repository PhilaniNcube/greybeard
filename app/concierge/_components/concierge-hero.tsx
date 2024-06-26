import { agrandir } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ConciergeHero = () => {
  return (
    <section className="relative">
      <Image
        src="/images/concierge.webp"
        width={900}
        height={1350}
        alt="Hero Image"
        className="w-full aspect-square lg:aspect-[5/2] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/90">
        <div className="container flex flex-col items-center justify-end h-full py-8">
          <h1
            className={cn(
              "text-2xl font-bold text-center text-white lg:text-6xl uppercase"
            , agrandir.className)}
          >
            Entertainment Concierge
          </h1>
          <p className="mt-4 text-sm text-center text-white lg:text-lg text-balance">
            Want to attend the coolest events anywhere in the country in style?
            We got you covered. From luxury accommodation, getting you there
            chauffeur driven in german machines and making sure you have the
            best seats at the gig.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ConciergeHero;
