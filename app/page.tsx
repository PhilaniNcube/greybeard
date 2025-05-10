import Link from "next/link";
import HomeHero from "./(home)/home-hero";
import Image from "next/image";



export default function Home() {
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Top Left Button */}
      <Link
        href="https://g.co/kgs/zgVtVVP"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 left-6 rounded-full bg-white px-6 py-2 text-black font-bold hover:bg-gray-200 transition-colors"
      >
        SI LA
      </Link>

      {/* Top Right Button */}
      <Link
        href="mailto:info@greybeardpro.co.za"
        className="absolute top-6 right-6 rounded-full bg-white px-6 py-2 text-black font-bold hover:bg-gray-200 transition-colors"
      >
        COME SPAAN
      </Link>

      {/* Center Content */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] mb-6">
          <Image src="/images/gb.png" alt="GB Logo" fill className="object-contain" priority />
        </div>
      
      </div>

        <div className="text-center space-y-2 absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">NEW WEBSITE</h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest">COMING SOON...</h2>
        </div>

      {/* Bottom Left Button */}
      <Link
        href="mailto:info@greybeardpro.co.za"
        className="absolute bottom-6 left-6 rounded-full bg-white px-6 py-2 text-black font-bold hover:bg-gray-200 transition-colors"
      >
        SAY HI
      </Link>

      {/* Bottom Right Button */}
      <Link
        href="https://www.instagram.com/greybeardpro?igsh=MTVjMDloMjh0bjlkeA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 rounded-full bg-white px-6 py-2 text-black font-bold hover:bg-gray-200 transition-colors"
      >
        STALK US
      </Link>
    </main>
  )
}
