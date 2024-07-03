import { cn } from "@/lib/utils";
import { agrandir } from "../fonts";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const events = [
  {
    image: "/images/events/nostra.jpeg",
    title: "LeXhosaNostra",
    number: "01",
  },
]

const page = () => {
  return (
			<main className="relative">

				<video
					muted
					src="/videos/background-video.mp4"
					className="object-cover w-full h-dvh"
					loop
					autoPlay
				/>
				<div className="absolute inset-0 bg-slate-800/40">
					<ScrollArea className="w-full h-dvh">
						<div className="relative container  py-40 lg:py-[200px]">
							<h1 className="flex flex-col items-end text-white">
								<span
									className={cn(
										"block lg:text-9xl font-semibold uppercase text-4xl",
										agrandir.className,
									)}
								>
									Upcoming
								</span>
								<span
									className={cn(
										"flex flex-row items-center justify-end lg:text-5xl w-full space-x-3 font-semibold uppercase text-2xl",
										agrandir.className,
									)}
								>
									<div className="h-[2px] bg-white flex-1 max-w-[740px]" />
									Events
								</span>
							</h1>
							<div className="grid gap-4 mt-8 lg:grid-cols-2">
                {
                  events.map((event) => (
	              <div className="relative w-full group" key={event.number}>
                  <div className="inset-0 items-center justify-center hidden group-hover:z-[999] group-hover:flex group-hover:absolute">
                  <Image src={event.image} alt={event.title} className="w-[280px] group-hover:block group-hover:absolute aspect-square" width={500} height={500} />
                  </div>
									<div className="relative min-h-[300px] flex items-center justify-center">
										<h3
											className={cn(
												"text-pink-600 text-5xl lg:text-[14rem] font-extrabold",
												agrandir.className,
											)}
										>
											{event.number}
										</h3>
										<div className="absolute inset-0 ">
											<div className="flex flex-col items-center justify-center h-full text-center text-white">
												<h4 className="text-2xl font-bold uppercase lg:text-4xl">
													{event.title}
												</h4>
											</div>
										</div>
									</div>
								</div>
                  ))
                }


							</div>
						</div>
					</ScrollArea>
				</div>
			</main>
		);
};
export default page;
