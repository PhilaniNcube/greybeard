"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Desktop() {

  const pathname = usePathname();

  return (
    <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center ">
            <Link className="text-lg font-semibold text-gray-50 " href="/">
              <Image
                src="/images/white-logo.png"
                width={1323}
                height={542}
                alt="logo"
                className="w-44 object-cover"
              />
              <span className="sr-only">Greybeard</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center justify-end md:flex-1 lg:w-0 uppercase">
            <Link
              className={cn(
                "text-sm md:text-xl font-medium  hover:text-slate-200 transition-colors duration-200",
                pathname === "/about" ? "text-white" : "text-slate-400"
              )}
              href="/about"
            >
              About Us
            </Link>
            <Link
              className={cn(
                "text-sm md:text-xl font-medium  hover:text-slate-200 transition-colors duration-200",
                pathname === "/friends" ? "text-white" : "text-slate-400"
              )}
              href="/friends"
            >
              Friends Of Grey
            </Link>
            <Link
              className={cn(
                "text-sm md:text-xl font-medium  hover:text-slate-200 transition-colors duration-200",
                pathname === "/clients" ? "text-white" : "text-slate-400"
              )}
              href="/clients"
            >
              Clients
            </Link>
            <Link
              className={cn(
                "text-sm md:text-xl font-medium  hover:text-slate-200 transition-colors duration-200",
                pathname === "/events" ? "text-white" : "text-slate-400"
              )}
              href="/events"
            >
              Events
            </Link>
            <Link
              className={cn(
                "text-sm md:text-xl font-medium  hover:text-slate-200 transition-colors duration-200",
                pathname === "/contact" ? "text-white" : "text-slate-400"
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
