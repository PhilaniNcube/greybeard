import { agrandir } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ClientsHero = () => {
  return (
			<section className="relative">
				<Image
					src="/images/iqs.webp"
					width={1920}
					height={1080}
					alt="Background"
					className="absolute inset-0 object-cover w-full lg:h-dvh aspect-video"
				/>
				<div className="relative pb-12 pt-28 lg:h-dvh bg-gradient-to-b from-transparent to-slate-700/80">
					<div className="container flex flex-col justify-center h-full lg:justify-end ">
						<h1
							className={cn(
								"text-2xl lg:text-[7rem] lg:-translate-y-20 text-white uppercase tracking-wide font-extrabold z-50",
								agrandir.className,
							)}
						>
							Our
							<span className="outline-text"> Clients</span>{" "}
						</h1>
					</div>
				</div>
			</section>
		);
};
export default ClientsHero;
