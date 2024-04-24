import './globals.css'
import type { Metadata } from 'next'

import { agrandir, montserrat, raleway } from './fonts'
import Navbar from '@/components/navbar'
import Desktop from '@/components/desktop-nav'
import MobileNavbar from '@/components/navbar'


export const metadata: Metadata = {
  title: 'Greybeard',
  description: 'Where brands meet cratives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
			<html lang="en">
				<body className={`${agrandir.className} bg-black`}>
					<Desktop />
					<MobileNavbar />
					{children}
				</body>
			</html>
		);
}
