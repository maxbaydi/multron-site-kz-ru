"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Plug, Lightbulb, Cable, Shield, Wifi, Factory, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const iconMap: Record<string, any> = {
  zap: Zap,
  plug: Plug,
  lightbulb: Lightbulb,
  cable: Cable,
  shield: Shield,
  wifi: Wifi,
  factory: Factory,
  smartphone: Smartphone,
}

export function CategoriesSection() {
  const { locale, t } = useLocale()

  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3"
            >
              {t("categories.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-muted-foreground"
            >
              {t("categories.subtitle")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Button asChild variant="outline" className="gap-2 bg-transparent min-h-[44px] touch-manipulation">
              <Link href="/products">
                {t("categories.viewAll")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Categories Grid - горизонтальный скролл на мобильных */}
        <div className="lg:flex lg:flex-col lg:gap-6">
          {/* First row - left aligned на десктопе, горизонтальный скролл на мобильных */}
          <div className="flex lg:justify-start gap-3 sm:gap-4 lg:gap-6 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 scroll-smooth">
            {categories.slice(0, 4).map((category, index) => {
              const Icon = iconMap[category.icon] || Zap
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 flex-shrink-0"
                >
                  <button className="group w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 active:scale-95 transition-all duration-300 touch-manipulation min-h-[112px] sm:min-h-[128px] lg:min-h-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors leading-tight">
                      {category.name[locale] || category.name.en}
                    </h3>
                  </button>
                </motion.div>
              )
            })}
          </div>
          {/* Second row - right aligned на десктопе, горизонтальный скролл на мобильных */}
          <div className="flex lg:justify-end gap-3 sm:gap-4 lg:gap-6 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 scroll-smooth mt-4 lg:mt-0">
            {categories.slice(4, 8).map((category, index) => {
              const Icon = iconMap[category.icon] || Zap
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index + 4) * 0.05 }}
                  viewport={{ once: true }}
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 flex-shrink-0"
                >
                  <button className="group w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 active:scale-95 transition-all duration-300 touch-manipulation min-h-[112px] sm:min-h-[128px] lg:min-h-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors leading-tight">
                      {category.name[locale] || category.name.en}
                    </h3>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Мобильная кнопка "View All" */}
        <div className="mt-6 sm:hidden text-center">
          <Button asChild variant="outline" className="gap-2 bg-transparent min-h-[44px] touch-manipulation">
            <Link href="/products">
              {t("categories.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
