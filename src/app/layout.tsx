import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google'
import {ReactNode} from 'react'
import { Header } from './components/header'
import { HeroSection } from './components/pages/home/hero-section'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'] 
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500']
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Ziembick Portfolio',
  description: 'Website created by Paulo Ziembick',
}


export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable} ${spaceGrotesk.variable}`}>
      <body>
       <Header /> 
       {children}       
      </body>
    </html>
  )
}
 

