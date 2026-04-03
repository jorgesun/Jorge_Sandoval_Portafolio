import type { Metadata } from 'next'
import { Syne, DM_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
})

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jorge Sandoval | Principal Process Engineer & Engineering Manager',
  description: '30+ years driving operational excellence in injection molding manufacturing. Principal Process Engineer at Rain Bird Corporation.',
  keywords: ['Process Engineer', 'Engineering Manager', 'Injection Molding', 'Manufacturing', 'IATF 16949', 'Rain Bird'],
  authors: [{ name: 'Jorge Sandoval' }],
  openGraph: {
    title: 'Jorge Sandoval | Principal Process Engineer',
    description: '30+ years driving operational excellence in injection molding manufacturing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
