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
				className="flex items-center overflow-hidden min-h-dvh lg:h-dvh lg:max-h-screen"
			>
				<div
					className={cn(
						"grid grid-cols-1 gap-10 md:grid-cols-2 relative container h-full",
					)}
				>
					<div className="flex items-end h-full lg:py-12">
						<Image
							src={artist?.banner || ""}
							width={600}
							height={600}
							alt={artist?.name || ""}
							className={cn(
								"mx-auto object-cover  w-[75vw] lg:w-[40vw] aspect-square origin-bottom",

							)}
						/>
					</div>
					<div className="flex flex-col justify-start lg:justify-start lg:pt-56 lg:h-[800px]">

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
