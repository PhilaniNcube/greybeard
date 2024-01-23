/* eslint-disable @next/next/no-img-element */
import artists from "@/artists";
import Link from "next/link";

const Artists = () => {
  return (
    <main className="">
      <div className="container grid grid-cols-1 gap-8 py-16 lg:py-32 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="flex flex-col items-center justify-center mb-10"
          >
            <img
              className="object-cover w-full rounded-full"
              src={artist.image}
              alt={artist.name}
            />

            <Link
              className="px-3 py-1 mt-3 text-white uppercase border border-white rounded-full hover:bg-white hover:text-black w-fit"
              href={`/artists/${artist.slug}`}
            >
             {artist.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Artists;
