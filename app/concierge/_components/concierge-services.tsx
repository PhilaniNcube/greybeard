import { Button } from "@/components/ui/button";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const services =[
  {
    name: "Luxury Apartments and Villas",
    image: "images/apartment.webp",
  },
  {
    name: "VIP lounges at big events & trendy clubs",
    image: "images/party.webp",
  },
  {
    name: "German Sedans & Mercedes Benz V Classes",
    image: "images/cars.webp",
  },


]

const ConciergeServices = () => {
  return (
    <section className="relative bg-white">
      <div className="container py-10">
        <h2 className="text-2xl font-medium italic text-center">
          We have access to:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-16">
          {services.map((service, index) => (
            <div className="w-full  group" key={index}>
              <h3 className="text-3xl text-center text-balance line-clamp-2 font-semibold mb-3">
                {service.name}
              </h3>
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/90 group-hover:from-transparent group-hover:to-slate-800 transition-all duration-300">

              <div className="absolute hidden inset-0 group-hover:flex flex-col justify-center items-center text-center text-white px-4">
                <Link href="/contact" prefetch={false}>
                  <Button variant="outline" className=" border-2 border-white bg-white uppercase rounded-full text-slate-900 font-bold">Enquire</Button>
                </Link>
              </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ConciergeServices;
