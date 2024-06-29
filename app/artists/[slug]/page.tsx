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
					backgroundImage: `${
						artist?.backgroundColor ||
						"linear-gradient(180deg, #000000 0%, #000000 100%)"
					}`,
				}}
				className="flex items-center overflow-hidden min-h-dvh lg:h-dvh"
			>
				<div
					className={cn(
						"grid grid-cols-1  place-items-end gap-10 md:grid-cols-2 relative container h-full",
					)}
				>
					<div className="flex items-end h-full">
						<Image
							src={artist?.image || ""}
							width={artist?.width || 600}
							height={artist?.height || 600}
							alt={artist?.name || ""}
							className={cn(
								"mx-auto object-cover w-[45vw] lg:w-[40vw] origin-bottom",
                artist?.slug === "jack" ? "lg:scale-90 " : "",
                artist?.slug === "vafa" ? "lg:scale-[85%] " : "",
                artist?.slug === "sliqe" ? "lg:scale-90 " : "",
                artist?.slug === "bxb" ? "lg:scale-75 " : "",
							)}
						/>
					</div>
					<div className="flex flex-col justify-center h-full">
						<h1
							className={cn(
								"text-2xl lg:text-5xl font-bold uppercase text-white",
								agrandir.className,
							)}
						>
							{artist?.name}
						</h1>
						<p className="mt-4 text-sm text-white lg:text-md">
							{artist?.description}{" "}
							{artist?.website ? (
								<Link href={`${artist?.website}`}>
									{artist?.slug === "si-jones"
										? "sijones.co.za"
										: `${artist.website}`}
								</Link>
							) : null}
						</p>
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
