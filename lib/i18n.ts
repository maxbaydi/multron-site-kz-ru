export type Locale = "en" | "ru" | "kz"

export interface LocaleConfig {
  code: Locale
  name: string
  domain: string
  flag: string
}

export const locales: LocaleConfig[] = [
  { code: "kz", name: "Қазақша", domain: "multron.kz", flag: "🇰🇿" },
  { code: "ru", name: "Русский", domain: "multron.kz", flag: "🇷🇺" },
  { code: "en", name: "English", domain: "multron.org", flag: "🌐" },
]

export const defaultLocale: Locale = "kz"

export function isLocale(value: string): value is Locale {
  return locales.some((l) => l.code === value)
}

export function getLocaleConfig(locale: Locale): LocaleConfig {
  return locales.find((l) => l.code === locale) || locales[0]
}

// Translations
export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.categories": "Categories",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.search": "Search products...",
    "nav.cart": "Cart",

    // Hero
    "hero.subtitle": "Technology Infrastructure Solutions",
    "hero.title": "Engineering Excellence for Tomorrow",
    "hero.description":
      "Premium electronic components, power systems, and lighting solutions for industrial and consumer applications worldwide.",
    "hero.cta.catalog": "Browse Catalog",
    "hero.cta.about": "Learn More",

    // About
    "about.tag": "About MULTRON",
    "about.title": "Global Leader in Electronic Infrastructure",
    "about.description":
      "MULTRON develops and manufactures advanced equipment, electronic devices, and components for everyday use and industrial environments. Our product line covers solutions for mobile electronics, workstations, production facilities, and specialized technical equipment.",

    // Features
    "features.safety": "Safety First",
    "features.safety.desc": "Certified products meeting international standards",
    "features.technology": "Advanced Technology",
    "features.technology.desc": "Cutting-edge solutions for modern challenges",
    "features.reliability": "Proven Reliability",
    "features.reliability.desc": "Industrial-grade components built to last",

    // Categories
    "categories.title": "Product Categories",
    "categories.subtitle": "Explore our comprehensive range of electronic solutions",
    "categories.viewAll": "View All",
    "categories.power": "Power Supplies",
    "categories.connectors": "Connectors",
    "categories.lighting": "Lighting",
    "categories.cables": "Cables",
    "categories.protection": "Protection",
    "categories.data": "Data Transfer",
    "categories.industrial": "Industrial",
    "categories.mobile": "Mobile",

    // Products
    "products.title": "Products",
    "products.subtitle": "Discover our most popular solutions",
    "products.viewAll": "View All Products",
    "products.addToCart": "Add to Cart",
    "products.inStock": "In Stock",
    "products.outOfStock": "Out of Stock",
    "products.new": "New",
    "products.sale": "Sale",
    "products.previewTitle": "Our Product Line",
    "products.previewSubtitle": "Explore our range of Multron accessories and solutions",
    "products.previewAlt": "Multron products collection",
    "productsPage.title": "All Products",
    "productsPage.subtitle": "Browse our complete catalog of Multron products",
    "productsPage.moreProducts": "And much more in our product line",

    // Footer
    "footer.description": "Global manufacturer of electronic components, power systems, and lighting solutions.",
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.news": "News",
    "footer.help": "Help Center",
    "footer.shipping": "Shipping",
    "footer.returns": "Returns",
    "footer.warranty": "Warranty",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.button": "Subscribe",
    "footer.contact": "Contact",
    "footer.contact.email": "info@multron.org",
    "footer.contact.address": "123 Tech Street, Innovation City, IC 12345",
    "cta.title": "Retail only",
    "cta.description": "We work only in retail. Buy our products via our Kaspi shop.",
    "cta.button": "Open Kaspi Shop",

    // Common
    "common.learnMore": "Learn More",
    "common.viewDetails": "View Details",
    "common.close": "Close",
    "common.menu": "Menu",
  },
  ru: {
    // Navigation
    "nav.products": "Продукция",
    "nav.categories": "Категории",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.search": "Поиск...",
    "nav.cart": "Корзина",

    // Hero
    "hero.subtitle": "Решения для тех. инфраструктуры",
    "hero.title": "Инженерное совершенство будущего",
    "hero.description":
      "Премиальные электронные компоненты, системы питания и световые решения для промышленности и быта по всему миру.",
    "hero.cta.catalog": "В каталог",
    "hero.cta.about": "Подробнее",

    // About
    "about.tag": "О MULTRON",
    "about.title": "Лидер в электронной инфраструктуре",
    "about.description":
      "MULTRON создает передовое оборудование и компоненты для быта и промышленности. Мы предлагаем решения для мобильной электроники, рабочих станций, производств и спецтехники.",

    // Features
    "features.safety": "Безопасность",
    "features.safety.desc": "Сертификация по мировым стандартам",
    "features.technology": "Технологии",
    "features.technology.desc": "Передовые решения современных задач",
    "features.reliability": "Надёжность",
    "features.reliability.desc": "Долговечные промышленные компоненты",

    // Categories
    "categories.title": "Категории",
    "categories.subtitle": "Полный спектр наших электронных решений",
    "categories.viewAll": "Все товары",
    "categories.power": "Питание",
    "categories.connectors": "Разъёмы",
    "categories.lighting": "Освещение",
    "categories.cables": "Кабели",
    "categories.protection": "Защита",
    "categories.data": "Передача данных",
    "categories.industrial": "Промышленное",
    "categories.mobile": "Мобильное",

    // Products
    "products.title": "Продукция",
    "products.subtitle": "Наши самые востребованные решения",
    "products.viewAll": "Смотреть всё",
    "products.addToCart": "В корзину",
    "products.inStock": "В наличии",
    "products.outOfStock": "Нет в наличии",
    "products.new": "Новинка",
    "products.sale": "Скидка",
    "products.previewTitle": "Линейка товаров",
    "products.previewSubtitle": "Изучите ассортимент решений Multron",
    "products.previewAlt": "Коллекция Multron",
    "productsPage.title": "Каталог",
    "productsPage.subtitle": "Полный список продукции Multron",
    "productsPage.moreProducts": "И многое другое в нашем каталоге",

    // Footer
    "footer.description": "Мировой производитель электронных компонентов, питания и освещения.",
    "footer.products": "Продукция",
    "footer.company": "Компания",
    "footer.support": "Поддержка",
    "footer.legal": "Инфо",
    "footer.about": "О нас",
    "footer.careers": "Карьера",
    "footer.news": "Новости",
    "footer.help": "Помощь",
    "footer.shipping": "Доставка",
    "footer.returns": "Возврат",
    "footer.warranty": "Гарантия",
    "footer.privacy": "Конфиденциальность",
    "footer.terms": "Условия",
    "footer.cookies": "Cookies",
    "footer.rights": "Все права защищены.",
    "footer.newsletter": "Подписка на новости",
    "footer.newsletter.placeholder": "Ваш email",
    "footer.newsletter.button": "Подписаться",
    "footer.contact": "Контакты",
    "footer.contact.email": "info@multron.org",
    "footer.contact.address": "г. Москва, ул. Технологическая, д. 123",
    "cta.title": "Покупка в розницу",
    "cta.description": "Мы работаем только в розницу. Для покупки воспользуйтесь нашим магазином на Kaspi.",
    "cta.button": "Открыть Kaspi Магазин",

    // Common
    "common.learnMore": "Подробнее",
    "common.viewDetails": "Детали",
    "common.close": "Закрыть",
    "common.menu": "Меню",
  },
  kz: {
    // Navigation
    "nav.products": "Өнімдер",
    "nav.categories": "Санаттар",
    "nav.about": "Біз туралы",
    "nav.contact": "Байланыс",
    "nav.search": "Іздеу...",
    "nav.cart": "Себет",

    // Hero
    "hero.subtitle": "Тех. инфрақұрылым шешімдері",
    "hero.title": "Болашақ инженерлік жетістігі",
    "hero.description":
      "Өнеркәсіп пен тұрмысқа арналған премиум электронды компоненттер, қуат жүйелері және жарықтандыру шешімдері.",
    "hero.cta.catalog": "Каталогқа",
    "hero.cta.about": "Толығырақ",

    // About
    "about.tag": "MULTRON туралы",
    "about.title": "Электронды саладағы көшбасшы",
    "about.description":
      "MULTRON тұрмыстық және өндірістік озық жабдықтар мен компоненттерді шығарады. Біз мобильді электроника, жұмыс станциялары және арнайы техника үшін шешімдер ұсынамыз.",

    // Features
    "features.safety": "Қауіпсіздік",
    "features.safety.desc": "Халықаралық стандартқа сай өнімдер",
    "features.technology": "Технология",
    "features.technology.desc": "Заманауи мәселелердің озық шешімі",
    "features.reliability": "Сенімділік",
    "features.reliability.desc": "Ұзақ мерзімді өнеркәсіптік бөлшектер",

    // Categories
    "categories.title": "Санаттар",
    "categories.subtitle": "Электрондық шешімдердің толық топтамасы",
    "categories.viewAll": "Барлығы",
    "categories.power": "Қуат көздері",
    "categories.connectors": "Қосқыштар",
    "categories.lighting": "Жарықтандыру",
    "categories.cables": "Кабельдер",
    "categories.protection": "Қорғау",
    "categories.data": "Деректер",
    "categories.industrial": "Өнеркәсіп",
    "categories.mobile": "Мобильді",

    // Products
    "products.title": "Өнімдер",
    "products.subtitle": "Ең сұранысқа ие шешімдеріміз",
    "products.viewAll": "Барлық өнімдер",
    "products.addToCart": "Себетке салу",
    "products.inStock": "Қоймада бар",
    "products.outOfStock": "Қоймада жоқ",
    "products.new": "Жаңа",
    "products.sale": "Жеңілдік",
    "products.previewTitle": "Өнім желісі",
    "products.previewSubtitle": "Multron аксессуарлары мен шешімдері",
    "products.previewAlt": "Multron жинағы",
    "productsPage.title": "Каталог",
    "productsPage.subtitle": "Multron өнімдерінің толық тізімі",
    "productsPage.moreProducts": "Және тағы басқалары каталогта",

    // Footer
    "footer.description": "Электрондық компоненттер мен қуат жүйелерінің әлемдік өндірушісі.",
    "footer.products": "Өнімдер",
    "footer.company": "Компания",
    "footer.support": "Қолдау",
    "footer.legal": "Ақпарат",
    "footer.about": "Біз туралы",
    "footer.careers": "Мансап",
    "footer.news": "Жаңалықтар",
    "footer.help": "Көмек",
    "footer.shipping": "Жеткізу",
    "footer.returns": "Қайтару",
    "footer.warranty": "Кепілдік",
    "footer.privacy": "Құпиялылық",
    "footer.terms": "Ережелер",
    "footer.cookies": "Cookies",
    "footer.rights": "Барлық құқық қорғалған.",
    "footer.newsletter": "Жаңалыққа жазылу",
    "footer.newsletter.placeholder": "Сіздің email",
    "footer.newsletter.button": "Жазылу",
    "footer.contact": "Байланыс",
    "footer.contact.email": "info@multron.org",
    "footer.contact.address": "г. Алматы, пр. Абая, д. 123",
    "cta.title": "Бөлшек сауда",
    "cta.description": "Біз тек бөлшек саудамен жұмыс істейміз. Тауарларды Kaspi дүкенімізден сатып алыңыз.",
    "cta.button": "Kaspi дүкеніне өту",

    // Common
    "common.learnMore": "Толығырақ",
    "common.viewDetails": "Ашу",
    "common.close": "Жабу",
    "common.menu": "Мәзір",
  },
}

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] || translations.en[key] || key
}
