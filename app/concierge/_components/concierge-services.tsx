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
    name: "German Sedans &  V Classes",
    image: "images/cars.webp",
  },


]

const ConciergeServices = () => {
  return (
    <section className="relative bg-white">
      <div className="container py-10">
        <h2 className="mb-4 text-2xl italic font-medium text-center">
          We have access to:
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
          {services.map((service, index) => (
            <div className="flex flex-col justify-between w-full group" key={service.name}>
              <h3 className="mb-3 text-lg font-semibold text-center text-balance line-clamp-2">
                {service.name}
              </h3>
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full aspect-video"
                />
                <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-b from-transparent to-slate-800/90 group-hover:from-transparent group-hover:to-slate-800">

              <div className="absolute inset-0 flex-col items-center justify-center hidden px-4 text-center text-white group-hover:flex">
                <Link href="/contact" prefetch={false}>
                  <Button variant="outline" className="font-bold uppercase bg-white border-2 border-white rounded-full text-slate-900">Enquire</Button>
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
