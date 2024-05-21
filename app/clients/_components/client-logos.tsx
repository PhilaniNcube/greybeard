"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from "next/image";

const logos = [
	{
		src: "/images/logos/loreal.webp",
		alt: "Loreal",
	},
	{
		src: "/images/logos/dark_and_lovely.webp",
		alt: "Dark and Lovely",
	},

	{
		src: "/images/logos/pmi-logo.webp",
		alt: "Philip Morris",
	},
	{
		src: "/images/logos/iqos.webp",
		alt: "IQOS",
	},
	{
		src: "/images/logos/rgbc.webp",
		alt: "RGBC",
	},
	{
		src: "/images/logos/hendricks.webp",
		alt: "Hendricks",
	},
	{
		src: "/images/logos/hennessy.webp",
		alt: "Hennessy",
	},

	{
		src: "/images/logos/diageo.webp",
		alt: "Diageo",
	},
	{
		src: "/images/logos/tanq.webp",
		alt: "Tanqueray",
	},
	{
		src: "/images/logos/netflix.png",
		alt: "Nteflix",
	},
];

const ClientLogos = () => {

  const options = {loop:true}





	return (
		<div className="bg-white">
			<div className="container py-2 ">
				<Carousel
					plugins={[
            AutoScroll({
              playOnInit: true,
            })
					]}
					opts={{
						loop: true,
					}}
					className="flex items-center justify-center w-full gap-8 overflow-hidden"
				>
					<CarouselContent className="">
						{logos.map((item, index) => (
							<CarouselItem key={item.src} className="flex items-center basis-1/4 lg:basis-1/6">
								<Image
									className="object-cover"
									src={item.src}
									alt={item.alt}
									width={600}
									height={300}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
};
export default ClientLogos;
