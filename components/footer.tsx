"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { useTheme } from "next-themes"
import { locales } from "@/lib/i18n"
import { getImageSrc } from "@/lib/image-utils"

export function Footer() {
  const { t } = useLocale()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerLinks = {
    products: [
      { label: "categories.power", href: "#categories" },
      { label: "categories.connectors", href: "#categories" },
      { label: "categories.lighting", href: "#categories" },
      { label: "categories.cables", href: "#categories" },
    ],
    company: [
      { label: "footer.about", href: "#about" },
      { label: "footer.products", href: "/products" },
    ],
  }

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 touch-manipulation">
              <div className="relative h-5 sm:h-6 w-auto">
                <Image
                  src={getImageSrc(mounted && resolvedTheme === "dark" ? "/logo/logo_white-on-black-bg.png" : "/logo/logo_black-on-white-bg.png")}
                  alt="MULTRON"
                  width={120}
                  height={24}
                  className="object-contain h-full w-auto"
                  priority
                  sizes="(max-width: 640px) 100px, 120px"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-xs">{t("footer.description")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">{t("footer.products")}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[44px] flex items-center"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">{t("footer.company")}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[44px] flex items-center"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h4 className="font-semibold mb-4 text-sm sm:text-base">{t("footer.contact")}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation min-h-[44px] flex items-center break-all"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} MULTRON. {t("footer.rights")}
          </p>

          {/* Domain badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {locales.map((loc) => {
              return (
                <a
                  key={loc.code}
                  href={`https://${loc.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-foreground/20 transition-all touch-manipulation min-h-[44px]"
                  title={loc.domain}
                >
                  {loc.code.toUpperCase()}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
