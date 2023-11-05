import './globals.css'
import type { Metadata } from 'next'

import { raleway } from './fonts'
import Navbar from '@/components/navbar'
import Desktop from '@/components/desktop-nav'


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
      <body className={raleway.className}>
        <Desktop />
        {children}
        </body>
    </html>
  )
}
