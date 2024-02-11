import { cn } from "@/lib/utils";
import { agrandir } from "../fonts";

const page = () => {
  return (
			<main className="relative">
				{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
				<video
					muted
					src="/videos/events.mp4"
					className="w-full "
					loop
					autoPlay
				/>
				<div className="absolute inset-0 bg-slate-800/40">
					<div className="relative container  py-40 lg:py-[200px]">
						<h1 className="flex flex-col items-end text-white">
							<span
								className={cn(
									"block lg:text-9xl font-semibold uppercase text-6xl",
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
						<div className="grid grid-cols-2 gap-4 mt-8">
							<div className="w-full">
								<div className="relative min-h-[300px] flex items-center justify-center">
									<h3
										className={cn(
											"text-pink-600 text-5xl lg:text-[14rem] font-extrabold",
											agrandir.className,
										)}
									>
										01
									</h3>
									<div className="absolute inset-0 ">
										<div className="flex flex-col items-center justify-center h-full text-center text-white">
											<h4 className="text-2xl font-bold uppercase lg:text-4xl">Metro FM Heatwave</h4>

										</div>
									</div>
								</div>
							</div>
              <div className="w-full">

              </div>
						</div>
					</div>
				</div>
			</main>
		);
};
export default page;
