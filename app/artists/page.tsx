"use client"

/* eslint-disable @next/next/no-img-element */
import artists from "@/artists";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { agrandir } from "../fonts";
import { motion } from "framer-motion";
import Image from "next/image";

const Artists = () => {




  return (
			<main className="pt-16 lg:pt-32">
				<div className="">
					<div className="container text-white ">
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

					<div className="container grid grid-cols-1 sm:grid-cols-2 md:hidden">
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
                  width={578}
                  height={788}
									src={artist.image}
									alt={artist.name}
								/>
								<p className="text-2xl text-center text-white sr-only">{artist.name}</p>
							</Link>
						))}
					</div>
					<div className="h-[430px] hidden md:block">
						<div className="relative  mx-auto -translate-x-[55px] max-w-[99%] h-full ">
							{artists.map((artist, index) => (
								<motion.div
									key={artist.name}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: index % 2 === 0 ? 1.1 : 5 }}
									style={{
										width: `${100 / artists.length - 1}%`,
										left: `${index * (100 / artists.length - 1) + 4}%`,
										zIndex: index === 5 || index === 2 ? 0 : 10,

									}}
								>
									<Link
										href={`/artists/${artist.slug}`}
										className={cn(
											"absolute -bottom-[10px]",
											index % 2 === 0 ? "z-0" : "z-10 ",
											index === 5 || index === 2 ? "z-0" : "z-10",
											index === artists.length - 1 ? "w-[]" : "z-10",
                      index === 5 ? "-translate-x-6" : "",
                      index === 6 ? "-translate-x-1" : "",
										)}
										style={{
											left: `${index * (100 / artists.length - 1) + 4}%`,
											zIndex: index === 5 || index === 2 ? 0 : 10,
										}}
									>
										<Image
											className={cn(
												"object-cover w-full h-[370px] grayscale-[60%] hover:grayscale-0 transition-transform duration-300",
												index === 4 ? "-translate-x-6" : "",
											)}
											width={576}
											height={788}
											src={artist.image}
											alt={artist.name}
										/>
									</Link>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</main>
		);
};
export default Artists;
