import { Oswald, Raleway , Archivo_Black, Montserrat} from "next/font/google";
import localFont from "next/font/local";


export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald"
})

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway"
})

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
})

export const archivo = Archivo_Black({
weight: "400",
display: "swap",
variable: "--font-agrandir",
subsets: ["latin"]
})


export const agrandir = localFont({
  src: [
    {
      path: '../public/fonts/Agrandir-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Agrandir-GrandHeavy.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})
