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
				className="flex items-center overflow-hidden lg:h-screen"
			>
				<div
					className={cn(
						"grid grid-cols-1 min-h-[100vh] place-items-end gap-10 md:grid-cols-2 relative container",
					)}
				>
					<Image
						src={artist?.image || ""}
						width={500}
						height={500}
						alt={artist?.name || ""}
						className={cn(
							"aspect-sqaure mx-auto object-cover w-[85vh]",
							artist?.slug === "si-jones"
								? "w-[80vh] md:w-[55vh] mx-auto object-cover"
								: "",
							artist?.slug === "jack" ? "w-[85vh]" : "",
              artist?.slug === "ntosh" ? "w-[80vh]" : "",
              artist?.slug === "benjamin" ? "w-[85vh]" : "",
						)}
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
							{artist?.website ? (
								<Link href={`${artist?.website}`}>{artist?.slug === "si-jones" ? "sijones.co.za" : `${artist.website}`}</Link>
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
