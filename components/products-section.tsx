"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { getImageSrc } from "@/lib/image-utils"

export function ProductsSection() {
  const { locale, t } = useLocale()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 flex flex-wrap items-end gap-2 leading-none"
            >
              <span>{t("products.title")}</span>
              <div className="relative w-32 h-5 sm:w-36 sm:h-6 lg:w-40 lg:h-7 flex-shrink-0 mb-[2px]">
                <Image
                  src={getImageSrc(mounted && resolvedTheme === "dark" ? "/logo/logo_white-on-black-bg.png" : "/logo/logo_black-on-white-bg.png")}
                  alt="MULTRON"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                />
              </div>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-muted-foreground"
            >
              {t("products.subtitle")}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="group bg-background rounded-xl sm:rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
              <Link href="/products" className="touch-manipulation">
                <Image
                  src={getImageSrc("/products/mix-products.png")}
                  alt={t("products.previewAlt")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <Link href="/products" className="flex items-center gap-3 flex-1 min-w-0 touch-manipulation">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0">
                      <Image
                        src={getImageSrc(mounted && resolvedTheme === "dark" ? "/icon/icon_w-on-b-bg.png" : "/icon/icon_b-on-w-bg.png")}
                        alt="MULTRON"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 64px"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {t("products.previewTitle")}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {t("products.previewSubtitle")}
                      </p>
                    </div>
                  </Link>
                  <Button asChild className="gap-2 w-full sm:w-auto min-h-[44px] touch-manipulation flex-shrink-0">
                    <Link href="/products">
                      {t("products.viewAll")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
