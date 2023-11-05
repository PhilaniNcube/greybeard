/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fUiHJuEVmWf
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Desktop() {
  return (
    <div className="hidden lg:flex lg:sticky top-0 z-50 bg-black shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <Link
              className="text-lg font-semibold text-gray-50 dark:text-white"
              href="/"
            >
              <Image src="/images/white-logo.png" width={1323} height={542} alt="logo" className="w-44 object-cover" />
              <span className="sr-only">Greybeard</span>
            </Link>

          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              className="text-sm font-medium text-white hover:text-slate-200 transition-colors duration-200"
              href="/talent"
            >
              Talent
            </Link>
            <Link
              className="ml-5 text-sm font-medium text-white hover:text-slate-200 transition-colors duration-200"
              href="/marketing"
            >
              Marketing
            </Link>
            <Link
              className="ml-5 text-sm font-medium text-white hover:text-slate-200 transition-colors duration-200"
              href="/creative"
            >
              Creative
            </Link>
            <Link
              className="ml-5 text-sm font-medium text-white hover:text-slate-200 transition-colors duration-200"
              href="/events"
            >
              Events
            </Link>
            <Link
              className="ml-5 text-sm font-medium text-white hover:text-slate-200 transition-colors duration-200"
              href="/friends"
            >
              Friends
            </Link>
            <Link href="/contact">
              <Button
                className="ml-8 whitespace-nowrap text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-400"
                variant="outline"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
