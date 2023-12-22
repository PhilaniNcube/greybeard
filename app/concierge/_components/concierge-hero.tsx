import Image from "next/image";

const ConciergeHero = () => {
  return (
    <section className="relative">
      <Image
        src="/images/pool.webp"
        width={1980}
        height={1053}
        alt="Hero Image"
        className="w-full aspect-[3/2] lg:aspect-[4/1] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/90">
        <div className="container flex flex-col justify-end items-center h-full py-8">
          <h1 className="text-white text-4xl lg:text-6xl font-bold text-center">
            Greybeard Concierge
          </h1>
          <p className="text-white text-center text-md lg:text-lg mt-4 text-balance">
            Want to attend the coolest events anywhere in the country in style?
            We got you covered. From luxury accommodation, getting you there
            chauffeur driven in a german machines and making sure you have the
            best seats at the gig.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ConciergeHero;
