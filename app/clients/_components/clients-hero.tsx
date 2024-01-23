import Image from "next/image";

const ClientsHero = () => {
  return (
    <section className="relative">
      <Image
        src="/images/iqs.webp"
        width={1920}
        height={1080}
        alt="Background"
        className="absolute inset-0 w-full h-screen aspect-video object-cover"
      />
      <div className="h-screen bg-gradient-to-b from-transparent to-slate-700/80 relative">
        <div className="flex container flex-col justify-center lg:justify-end h-full">
          <h1 className="text-4xl lg:text-[9rem] lg:-translate-y-20 text-white uppercase tracking-wide font-extrabold z-50">
            Our
            <span className="outline-text"> Clients</span>{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default ClientsHero;
