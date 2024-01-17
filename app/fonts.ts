import { Oswald, Raleway , Archivo_Black, Montserrat} from "next/font/google";

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
variable: "--font-archivo",
subsets: ["latin"]
})
