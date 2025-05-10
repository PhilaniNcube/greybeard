import './globals.css'
import type { Metadata } from 'next'

import { agrandir, montserrat, raleway } from './fonts'
import Navbar from '@/components/navbar'
import Desktop from '@/components/desktop-nav'
import MobileNavbar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'

import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  metadataBase: new URL('https://greybeardpro.co.za'),
  title: 'Greybeard',
  description: 'Where brands meet creatives',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
			<html lang="en">
				<body className={`${agrandir.className} bg-black text-white`}>
          <GoogleTagManager gtmId="GTM-57WZT4L4" />
					{/* <Desktop /> */}
					{/* <MobileNavbar /> */}
					{children}
          {/* <Toaster  /> */}
				</body>
			</html>
		);
}
