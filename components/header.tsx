"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Globe, ChevronDown, Sun, Moon, Monitor, Check, ArrowRight, Zap, Plug, Lightbulb, Cable, Shield, Wifi, Factory, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useLocale } from "@/lib/locale-context"
import { locales, type Locale } from "@/lib/i18n"
import { categories as productCategories, products } from "@/lib/products"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { getImageSrc } from "@/lib/image-utils"
import { MULTRON_ORG_URL } from "@/lib/links"

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

export function Header() {
  const { locale, localeConfig, t, setLocale } = useLocale()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const themes = [
    { value: "light", label: "Светлая", icon: Sun },
    { value: "dark", label: "Темная", icon: Moon },
    { value: "system", label: "Системная", icon: Monitor },
  ]

  const getThemeIcon = () => {
    if (!mounted) return <Sun className="w-5 h-5" />
    
    if (theme === "system") {
      return <Monitor className="w-5 h-5" />
    } else if (theme === "dark" || resolvedTheme === "dark") {
      return <Moon className="w-5 h-5" />
    } else {
      return <Sun className="w-5 h-5" />
    }
  }

  const getThemeLabel = () => {
    if (!mounted) return "Тема"
    return themes.find((t) => t.value === theme)?.label || "Тема"
  }

  const featuredProducts = products.slice(0, 3)
  const topCategories = productCategories.slice(0, 6)

  const handleLocaleSelect = (nextLocale: Locale) => {
    if (nextLocale === "en") {
      window.location.href = MULTRON_ORG_URL
      return
    }
    setLocale(nextLocale)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border safe-area-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-0 flex-shrink-0 touch-manipulation">
            <div className="relative h-5 sm:h-6 lg:h-8 w-auto">
              <Image
                src={getImageSrc(mounted && resolvedTheme === "dark" ? "/logo/logo_white-on-black-bg.png" : "/logo/logo_black-on-white-bg.png")}
                alt="MULTRON"
                width={120}
                height={32}
                className="object-contain h-full w-auto"
                priority
                sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 120px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                    {t("nav.categories")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-3">
                      {topCategories.map((category) => {
                        const Icon = iconMap[category.icon] || Zap
                        return (
                          <li key={category.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/#categories`}
                                className="group flex flex-col gap-2 rounded-lg p-4 hover:bg-accent transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold leading-none">
                                      {category.name[locale] || category.name.en}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                      <li className="col-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/#categories"
                            className="group !flex !flex-row flex-nowrap items-center justify-between gap-2 rounded-lg p-4 hover:bg-accent transition-colors border border-border whitespace-nowrap min-w-0"
                          >
                            <span className="text-sm font-medium whitespace-nowrap truncate">{t("categories.viewAll")}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                    {t("nav.products")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products"
                            className="group relative flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                          >
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                              <Image
                                src={getImageSrc("/products/mix-products.png")}
                                alt={t("products.previewAlt")}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 300px"
                              />
                            </div>
                            <div className="relative z-10">
                              <div className="mb-2 text-lg font-semibold">
                                {t("products.title")}
                              </div>
                              <p className="text-sm text-muted-foreground leading-tight">
                                {t("products.subtitle")}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {featuredProducts.map((product) => (
                        <li key={product.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/products"
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground [&:hover>p]:text-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {product.name[locale] || product.name.en}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors">
                                {product.description[locale] || product.description.en}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products"
                            className="group !flex !flex-row flex-nowrap items-center justify-between gap-2 rounded-lg p-4 hover:bg-accent transition-colors border border-border whitespace-nowrap min-w-0"
                          >
                            <span className="text-sm font-medium whitespace-nowrap truncate">{t("products.viewAll")}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#about" className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-muted-foreground hover:text-foreground")}>
                      {t("nav.about")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#contact" className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-muted-foreground hover:text-foreground")}>
                      {t("nav.contact")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 min-w-0">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-muted-foreground hover:text-foreground min-h-[44px] touch-manipulation px-2 sm:px-3">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline text-xs font-medium">{localeConfig.code.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3 hidden sm:inline flex-shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-fit w-auto">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc.code}
                    onClick={() => handleLocaleSelect(loc.code)}
                    className={cn("flex items-center justify-center cursor-pointer min-h-[44px] touch-manipulation", locale === loc.code && "bg-secondary")}
                  >
                    <span className="text-xs text-muted-foreground leading-none">{loc.code.toUpperCase()}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px] touch-manipulation"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={mounted ? theme : "loading"}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {getThemeIcon()}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {themes.map((themeOption) => {
                  const Icon = themeOption.icon
                  const isSelected = theme === themeOption.value
                  return (
                    <DropdownMenuItem
                      key={themeOption.value}
                      onClick={() => setTheme(themeOption.value)}
                      className={cn(
                        "flex items-center gap-3 cursor-pointer transition-all duration-200 min-h-[44px] touch-manipulation",
                        isSelected && "bg-secondary"
                      )}
                    >
                      <motion.div
                        initial={false}
                        animate={{ scale: isSelected ? 1 : 0.8, opacity: isSelected ? 1 : 0.7 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      <span className="flex-1">{themeOption.label}</span>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className="w-4 h-4 text-primary" />
                        </motion.div>
                      )}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground min-h-[44px] min-w-[44px] touch-manipulation">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96 bg-background border-border">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8 px-4 sm:px-6">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    <Link
                      href="/#categories"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 min-h-[44px] flex items-center touch-manipulation rounded-md hover:bg-accent/50"
                    >
                      {t("nav.categories")}
                    </Link>
                    <Link
                      href="/products"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 min-h-[44px] flex items-center touch-manipulation rounded-md hover:bg-accent/50"
                    >
                      {t("nav.products")}
                    </Link>
                    <Link
                      href="/#about"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 min-h-[44px] flex items-center touch-manipulation rounded-md hover:bg-accent/50"
                    >
                      {t("nav.about")}
                    </Link>
                    <Link
                      href="/#contact"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 min-h-[44px] flex items-center touch-manipulation rounded-md hover:bg-accent/50"
                    >
                      {t("nav.contact")}
                    </Link>
                  </nav>

                  {/* Mobile Language */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3 px-2">Region</p>
                    <div className="grid grid-cols-2 gap-2">
                      {locales.map((loc) => (
                        <Button
                          key={loc.code}
                          variant={locale === loc.code ? "secondary" : "ghost"}
                          size="sm"
                          onClick={() => handleLocaleSelect(loc.code)}
                          className="justify-start gap-2 min-h-[44px] touch-manipulation"
                        >
                          <span>{loc.flag}</span>
                          <span className="text-xs">{loc.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Theme */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3 px-2">Тема</p>
                    <div className="grid grid-cols-1 gap-2">
                      {themes.map((themeOption) => {
                        const Icon = themeOption.icon
                        const isSelected = theme === themeOption.value
                        return (
                          <Button
                            key={themeOption.value}
                            variant={isSelected ? "secondary" : "ghost"}
                            size="sm"
                            onClick={() => setTheme(themeOption.value)}
                            className="justify-start gap-3 min-h-[44px] touch-manipulation"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{themeOption.label}</span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-primary ml-auto" />
                            )}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
