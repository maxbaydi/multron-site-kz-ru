import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { LocaleProvider } from "@/lib/locale-context"
import { ThemeProvider } from "@/components/theme-provider"
import { notoSans } from "@/lib/fonts"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "cyrillic"] })
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MULTRON — Technology Infrastructure Solutions",
  description:
    "Global manufacturer of electronic components, power systems, and lighting solutions for industrial and consumer applications.",
  keywords: "electronics, power supplies, connectors, lighting, industrial, components, MULTRON",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "MULTRON — Technology Infrastructure Solutions",
    description: "Premium electronic components, power systems, and lighting solutions worldwide.",
    type: "website",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kk" suppressHydrationWarning className={`${geistMono.variable} ${notoSans.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}