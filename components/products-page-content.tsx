"use client"

import { useLocale } from "@/lib/locale-context"
import { products } from "@/lib/products"
import { motion } from "framer-motion"
import Image from "next/image"
import { getImageSrc } from "@/lib/image-utils"

export function ProductsPageContent() {
  const { locale, t } = useLocale()

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            {t("productsPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t("productsPage.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-square bg-secondary overflow-hidden">
                  <Image
                    src={product.image ? getImageSrc(product.image) : "/placeholder.svg"}
                    alt={product.name[locale] || product.name.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-md ${
                          product.badge === "new"
                            ? "bg-primary text-primary-foreground"
                            : "bg-destructive text-destructive-foreground"
                        }`}
                      >
                        {product.badge === "new" ? t("products.new") : t("products.sale")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{product.sku}</p>
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name[locale] || product.name.en}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                    {product.description[locale] || product.description.en}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: products.length * 0.1 }}
          >
            <div className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="relative aspect-square bg-secondary/50 rounded-xl mb-4 w-24 h-24 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-primary transition-colors">
                {t("productsPage.moreProducts")}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

