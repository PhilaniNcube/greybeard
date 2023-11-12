/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3y7FcQlG3GG
 */
import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-blue-600 relative"
    >
      <Image src="/images/greybeard_banner.png" alt="Banner" width={1920} height={1080} className="absolute bottom-0 left-0 right-0 pointer-events-none w-full  object-cover" />
      <div className="container mx-auto flex items-center justify-center h-full ">
        <div className="text-center space-y-6">
          <Image src="/images/white-logo.png" alt="logo" width={1323} height={542} className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto object-cover" />
          <p className="text-xl text-black">
            Where Brands Meet Creatives
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
