"use client";

import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import artists from "@/artists";



const ArtistsCarousel = () => {
	return (
		<div className="flex items-end flex-1">
			<div className="h-full py-2">
				<Carousel
					plugins={[
						AutoScroll({
							playOnInit: true,
						}),
					]}
					opts={{
						loop: true,
            stopAutoScrollOnHover: true,
            stopAutoScrollOnInteraction: true,
					}}
					className="flex items-center justify-center w-full h-full gap-8 overflow-hidden"
				>
					<CarouselContent className="h-full">
						{artists.map((item, index) => (
							<CarouselItem
								key={item.slug}
								className="flex items-end basis-1/5"
							>
								<Image
									className="object-cover w-full scale-150"
									src={item.img}
									alt={item.name}
									width={600}
									height={600}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
};
export default ArtistsCarousel;
