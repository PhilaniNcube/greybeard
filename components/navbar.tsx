"use client"

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { oswald } from "@/app/fonts";
import { Separator } from "./ui/separator";

const links = [
  { title: "About Us", href: "/about"},
  { title: "Talent", href: "/artists"},
  { title: "Friends Of Grey", href: "/friends"},
  { title: "Clients", href: "/clients"},
  { title: "Concierge", href: "/concierge"},
  { title: "Get In Touch", href: "/contact"},
]

const MobileNavbar = () => {
  return <nav className="lg:hidden fixed top-0 left-0 right-0 z-[500]">
    <div className="container flex items-center justify-between py-4">
      <Image src="/images/white-logo.png" width={1323} height={542} alt="Logo" className="object-cover w-36"  />

      <Sheet >
          <SheetTrigger>
            <MenuIcon className="w-8 h-8 text-white" />
          </SheetTrigger>
          <SheetContent >
              <SheetHeader>
                <SheetTitle className="w-full">
                 {/* <Image src="/images/black_logo.png" width={1323} height={542} alt="Logo" className="object-cover w-1/2"  /> */}
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-2" />
              <div className="flex flex-col w-full mt-5 gap-y-5">
                {links.map((link, index) => (
                  <Link key={link.href} href={link.href} className={cn("text-lg md:text-2xl text-white font-medium", oswald.className)}>
                    {link.title}
                  </Link>
                ))}
              </div>
          </SheetContent>
      </Sheet>
    </div>
  </nav>;
};
export default MobileNavbar;
