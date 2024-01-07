import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geniusla - Üç tarafı aptallar ile çevrili deha parçası',
  description: 'Geniusla discord sunucusunun resmi web sitesi.',
  keywords: ["Geniusla", "Geniusla Discord", "Geniusla Website", "Geniusla Discord Server", "GNSL", "GNSL Esport", "GNSL espor", "MJC", "Mr John Canada", "Can Yücel Bal", "The piece of genius who is surrounded by idiots"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
