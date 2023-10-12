import Hero from '@/components/ui/hero/hero-component'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="flex items-center justify-center w-full h-screen overflow-hidden bg-green-700">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Hello World</h1>
          <Image src="/images/white-logo.png" width={1323} height={542} alt="logo" className="w-[300px] object-cover" />
        </div>
      </div>
    </main>
  )
}
