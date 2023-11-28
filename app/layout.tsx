import Navbar from "@/components/navbar/navbar"
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from "@/components/footer/footer"
import Progress from "@/components/progress-bar/progress"
import { cn } from "@/lib/utils"

const font = Poppins({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: "VATMENA",
    description: "VATMENA, the VATSIM division covering the Middle East and North Africa, bringing together a community of simulation pilots and virtual air traffic controllers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={cn(font.className, "mena")}>
              <div><Navbar /></div>
              <div>{children}</div>
              <div><Footer /></div>
              <Progress />
          </body>
    </html>
  )
}
