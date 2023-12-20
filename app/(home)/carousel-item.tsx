import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* eslint-disable @next/next/no-img-element */
const CarouselItem = ({
  item,
}: {
  item: { name: string; image: string; backgroundColor: string };
}) => {
  return (
    <div className="flex items-center justify-center relative isolate w-[10rem] sm:w-[15rem] md:w-[18rem] lg:w-[23rem] z-50 cursor-grab">
      <div
        className={cn(
          "flex justify-center items-center relative rounded-full w-full aspect-square bg-clip-border overflow-clip",
          `${item.backgroundColor}`
        )}
      >
        <img
          className="h-full w-full mx-auto  my-auto object-cover "
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="absolute group inset-0 w-full h-full hover:bg-slate-100/10 rounded-full bg-clip-border overflow-clip flex items-center justify-around">
        <Button
          className="group-hover:block hidden  rounded-full bg-slate-100/10 text-white font-bold"
          variant="outline"
        >
          About {item.name}
        </Button>
        <Button
          className="group-hover:block hidden  rounded-full bg-slate-100/10 text-white font-bold"
          variant="outline"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};
export default CarouselItem;
