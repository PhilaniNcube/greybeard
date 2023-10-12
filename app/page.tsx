import Hero from '@/components/ui/hero/hero-component'
import Image from 'next/image'
import AboutUs from './_homepagecomponents/AboutUs'


export default function Home() {
  return (
    <main className="">
      <Hero />
     <AboutUs />
    </main>
  )
}
