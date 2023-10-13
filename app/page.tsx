import Hero from '@/components/ui/hero/hero-component'
import Image from 'next/image'
import AboutUs from './_homepagecomponents/AboutUs'
import WhatWeDo from './_homepagecomponents/what-we-do'


export default function Home() {
  return (
    <main className="">
     <Hero />
     <AboutUs />
     <WhatWeDo />
    </main>
  )
}
