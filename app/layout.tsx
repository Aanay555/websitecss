import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'A comprehensive professional portfolio website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <Navbar />
          <main className="container">
            {children}
          </main>
          <Footer />
     
      </body>
    </html>
  )
}