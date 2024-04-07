import { agrandir } from "@/app/fonts";
import artists from "@/artists";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const ArtistPage = ({params:{slug}}:{params:{slug:string}}) => {

   const artist = artists.find((artist) => artist.slug === slug);

  return (
    <main
      style={{
        backgroundImage: `${artist?.backgroundColor || "linear-gradient(180deg, #000000 0%, #000000 100%)"}`,
      }}
      className="flex items-center min-h-screen"
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-10 md:grid-cols-2 relative py-36 container"
        )}
      >
        <Image
          src={artist?.image || ""}
          width={600}
          height={600}
          alt={artist?.name || ""}
          className="w-[60vh] mx-auto object-cover"
        />
        <div className="flex flex-col justify-center">
          <h1
            className={cn(
              "text-5xl font-bold uppercase text-white",
              agrandir.className
            )}
          >
            {artist?.name}
          </h1>
          <p className="mt-4 text-white text-md">{artist?.description}</p>
          <Link
            href="/contact"
            className="px-3 py-1 mt-4 text-white uppercase border border-white rounded-full hover:bg-white hover:text-black w-fit"
          >
            Book Now
          </Link>
        </div>
      </div>
    </main>
  );
};
export default ArtistPage;
