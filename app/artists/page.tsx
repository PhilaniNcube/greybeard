"use client"

/* eslint-disable @next/next/no-img-element */
import artists from "@/artists";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { agrandir } from "../fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import ArtistsClient from "./_components/artist-carousel";
import { useEffect, useState } from "react";

const Artists = () => {

  // write a function to get the innerWidth of the window

  const [innerWidth, setInnerWidth] = useState(0)

  // write a function to get the innerWidth of the window and set it to the innerWidth state
  useEffect(() => {
    const windowWidth = window.innerWidth
    setInnerWidth(windowWidth)
  }, [])

  console.log({innerWidth})

  const numArtists = artists.length

  const width = innerWidth / numArtists







  return (
			<main className="">
				<div className="flex flex-col h-screen">
					<div className="container text-white pt-52">
						<h1
							className={cn(
								"mb-4 text-2xl md:text-4xl  lg:text-5xl font-bold text-center",
								agrandir.className,
							)}
						>
							Get To Know Our Talent
						</h1>
						<p className="mb-8 text-center mx-auto max-w-[60ch]">
							Our curated roster of diverse talent ensures a perfect match for
							every brand looking to tell a unique story. Join us in creating a
							world where talent and brand synergy redefine the future of
							entertainment.
						</p>
					</div>

					<div className="grid grid-cols-1 px-3 sm:grid-cols-2 md:hidden">
						{artists.map((artist, index) => (
							<Link
								href={`/artists/${artist.slug}`}
								key={artist.name}
								className={cn(
									"flex flex-col items-center justify-center mb-10 py-10 group",
								)}
							>
								<Image
									className={cn(
										"object-cover w-full transition-transform duration-300 z-50",
										`z-[${index}]`,
									)}
									width={500}
									height={500}
									src={artist.banner}
									alt={artist.name}
								/>
								<p className="text-2xl text-center text-white sr-only">
									{artist.name}
								</p>
							</Link>
						))}
					</div>
					<div className="md:h-[475px] hidden lg:block ">
						<div className="relative flex w-full h-full overflow-x-clip">
							{artists.map((artist, index) => (
								<motion.div
									className={cn(
										"absolute flex items-end h-full origin-bottom  hover:z-[999] duration-300 transition-transform",
										index === 0 ? "-left-4 scale-90 hover:scale-125" : "",
										index === numArtists - 1
											? "left-[83%] scale-90 -z-[500] hover:scale-125"
											: "",
										index === numArtists - 2
											? "left-[70%] z-[600] hover:scale-105"
											: "",
										index === numArtists - 3
											? "left-[62%] hover:scale-125"
											: "",
										index === numArtists - 4
											? "left-[53%] scale-90 hover:scale-105"
											: "",
										index === numArtists - 5 ? "left-[42%] " : "",
										index === numArtists - 6 ? "left-[31%] scale-105" : "",
										index === numArtists - 7 ? "left-[20%] scale-105" : "",
										index === numArtists - 8 ? "left-[12%] scale-90" : "",
									)}
									key={artist.name}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: index % 2 === 0 ? 1.1 : 5 }}
									style={{
										zIndex: index === 5 ? 25 : 0,
									}}
								>
									<Link
										href={`/artists/${artist.slug}`}
										className={cn(
											"origin-bottom hover:z-[9999] duration-300 h-full flex items-end",
										)}
									>
										<Image
											className={cn(
												"transition-transform duration-300 w-full h-full object-cover hover:grayscale-0",
											)}
											width={400}
											height={742}
											src={artist.img}
											alt={artist.name}
										/>
									</Link>
									{/* <Link
										href={`/artists/${artist.slug}`}
										className={cn(
											"absolute bottom-0 origin-bottom hover:scale-110 hover:z-[9999] duration-300",
											index === 0 ? "-translate-x-8 scale-[83%]" : "",
											index === 5 ? "-translate-x-[25px] scale-90 origin-bottom z-[3]" : "",
											index === 1 ? "translate-x-6 scale-[85%]" : "",
											index === 2 ? "translate-x-6 scale-[82%]" : "",
											index === 3 ? "translate-x-6" : "",
											index === numArtists - 1 ? "z-[10] scale-90 translate-x-28" : "",
											index === numArtists - 2 ? "scale-[82%] origin-bottom translate-x-6" : "",
											index === numArtists - 3 ? "scale-[80%] origin-bottom translate-x-6" : "",
											index === numArtists - 4 ? "scale-[77%] origin-bottom " : "",

										)}
										style={{
											left: `${(index) * 8.5}%`,
											// zIndex: index === 5 ? 25 : 0,
										}}
									>
										<Image
											className={cn(
												"object-cover w-[370px] h-[370px] ] hover:grayscale-0 transition-transform duration-300",

											)}
											width={600}
											height={600}
											src={artist.img}
											alt={artist.name}
										/>
									</Link> */}
								</motion.div>
							))}
						</div>
					</div>
					{/* <ArtistsClient /> */}
				</div>
			</main>
		);
};
export default Artists;
