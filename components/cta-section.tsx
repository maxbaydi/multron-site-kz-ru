"use client"

import { useLocale } from "@/lib/locale-context"
import { Mail, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { KASPI_SHOP_URL } from "@/lib/links"

export function CTASection() {
  const { t } = useLocale()

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto text-pretty">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <motion.a
              href={`mailto:${t("footer.contact.email")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group touch-manipulation min-h-[44px] w-full sm:w-auto justify-center sm:justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm sm:text-base font-medium break-all sm:break-normal">{t("footer.contact.email")}</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto min-h-[44px] touch-manipulation">
              <a href={KASPI_SHOP_URL} target="_blank" rel="noopener noreferrer">
                {t("cta.button")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

