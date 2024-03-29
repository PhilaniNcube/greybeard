"use client"

/* eslint-disable @next/next/no-img-element */
import artists from "@/artists";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { agrandir } from "../fonts";
import { motion } from "framer-motion";

const Artists = () => {




  return (
			<main className="py-16 lg:py-32">
				<div className="container">
					<div className="text-white">
						<h1
							className={cn(
								"mb-4 text-2xl md:text-4xl lg:text-5xl font-bold text-center",
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

					<div className="grid grid-cols-1 sm:grid-cols-2 md:hidden">
						{artists.map((artist, index) => (
							<Link
								href={`/artists/${artist.slug}`}
								key={artist.name}
								className={cn(
									"flex flex-col items-center justify-center mb-10 py-10 group",
								)}
							>
								<img
									className={cn(
										"object-cover w-full group-hover:scale-110 transition-transform duration-300 z-50",
										`z-[${index}]`,
									)}
									src={artist.image}
									alt={artist.name}
								/>
								<p className="text-2xl text-center text-white">{artist.name}</p>
							</Link>
						))}
					</div>

					<div className="relative md:flex min-h-[500px] mt-8 max-w-[85%] hidden mx-auto">
						{artists.map((artist, index) => (
							<Link
								href={`/artists/${artist.slug}`}
								key={artist.name}
								className={cn(
									"absolute flex flex-col items-center justify-end py-10 group ",
									"group-hover:z-[999]",
								)}
								style={{
									left: `${index * (100 / artists.length - 1)}%`,
									zIndex: `${index % 2 === 0 ? 1 : 2}`,
								}}
							>
								<motion.img
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: index % 2 === 0 ? 1.1 : 5 }}
									className={cn(
										"object-contain w-full scale-[130%] h-[330px]  group-hover:scale-[150%] transition-transform duration-300 z-50",
										`z-[${index}] group-hover:z-[999]`,
									)}
									src={artist.image}
									alt={artist.name}
								/>
							</Link>
						))}
					</div>
				</div>
			</main>
		);
};
export default Artists;
