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
				className="flex items-center overflow-hidden"
			>
				<div
					className={cn(
						"grid grid-cols-1 min-h-[100vh] place-items-end gap-10 md:grid-cols-2 relative container",
					)}
				>
					<Image
						src={artist?.image || ""}
						width={579}
						height={788}
						alt={artist?.name || ""}
						className={artist?.slug === 'si-jones' ? "w-[58vh] mx-auto object-cover" : "w-[63vh] mx-auto object-cover rounded-lg"}
					/>
					<div className="flex flex-col justify-center h-full">
						<h1
							className={cn(
								"text-5xl font-bold uppercase text-white",
								agrandir.className,
							)}
						>
							{artist?.name}
						</h1>
						<p className="mt-4 text-white text-md">
							{artist?.description}{" "}
							<a href={`${artist?.website}`}>{` ${artist?.website}`}</a>
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
