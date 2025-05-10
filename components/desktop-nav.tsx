"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useBoundedScroll from "@/hooks/useBoundedScroll";
import { useEffect, useState } from "react";

export default function Desktop() {

  const pathname = usePathname();

    const [scrollYDepth, setScrollYDepth] = useState(0);

		const { scrollY } = useScroll();

		const data = useMotionValueEvent(scrollY, "change", (latest) => {
			console.log("Page scroll: ", latest);
			setScrollYDepth(latest);
			console.log("Depth", scrollYDepth);
		});





  return (
			<div
				className={cn(
					"fixed top-0 left-0 right-0 z-[9999] hidden shadow-md lg:flex backdrop-blur-md duration-300 transition-colors",
				    scrollYDepth > 50 ? "bg-black/90" : "",)}
			>
				<nav className="container px-6 py-4 mx-auto">
					<div className="md:flex md:items-center md:justify-between">
						<div className="flex items-center justify-between ">
							<Link className="text-lg font-semibold text-gray-50 " href="/">
								<Image
									src="/images/white-logo.png"
									width={1323}
									height={542}
									alt="logo"
									className="object-cover w-44"
								/>
								<span className="sr-only">Greybeard</span>
							</Link>
						</div>
						<div className="items-center justify-end hidden space-x-4 uppercase md:flex md:flex-1 lg:w-0">
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/about" ? "text-white" : "text-slate-400",
								)}
								href="/about"
							>
								About Us
							</Link>{" "}
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/clients" ? "text-white" : "text-slate-400",
								)}
								href="/clients"
							>
								Clients
							</Link>
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/artists" ? "text-white" : "text-slate-400",
								)}
								href="/artists"
							>
								Talent
							</Link>
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/friends" ? "text-white" : "text-slate-400",
								)}
								href="/friends"
							>
								Friends Of Grey
							</Link>
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/events" ? "text-white" : "text-slate-400",
								)}
								href="/events"
							>
								Events
							</Link>
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/concierge" ? "text-white" : "text-slate-400",
								)}
								href="/concierge"
							>
								Concierge
							</Link>
							<Link
								className={cn(
									"text-sm md:text-lg font-medium  hover:text-slate-200 transition-colors duration-200",
									pathname === "/contact" ? "text-white" : "text-slate-400",
								)}
								href="/contact"
							>
								Get In Touch
							</Link>
						</div>
					</div>
				</nav>
			</div>
		);
}
