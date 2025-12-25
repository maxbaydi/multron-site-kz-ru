export interface Product {
  id: string
  name: Record<string, string>
  description: Record<string, string>
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: "new" | "sale"
  inStock: boolean
  sku: string
}

export interface Category {
  id: string
  name: Record<string, string>
  icon: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "power",
    name: { en: "Power Supplies", ru: "Блоки питания", kz: "Қуат көздері", zh: "电源", de: "Netzteile" },
    icon: "zap",
    image: "/power-supply-unit-electronics.jpg",
    productCount: 156,
  },
  {
    id: "connectors",
    name: { en: "Connectors", ru: "Разъёмы", kz: "Қосқыштар", zh: "连接器", de: "Steckverbinder" },
    icon: "plug",
    image: "/electronic-connectors-cables.jpg",
    productCount: 324,
  },
  {
    id: "lighting",
    name: { en: "Lighting", ru: "Освещение", kz: "Жарықтандыру", zh: "照明", de: "Beleuchtung" },
    icon: "lightbulb",
    image: "/led-lighting-modules.jpg",
    productCount: 89,
  },
  {
    id: "cables",
    name: { en: "Cables", ru: "Кабели", kz: "Кабельдер", zh: "电缆", de: "Kabel" },
    icon: "cable",
    image: "/industrial-cables-wiring.jpg",
    productCount: 245,
  },
  {
    id: "protection",
    name: { en: "Protection", ru: "Защита", kz: "Қорғау", zh: "保护", de: "Schutz" },
    icon: "shield",
    image: "/circuit-protection-fuses.jpg",
    productCount: 178,
  },
  {
    id: "data",
    name: { en: "Data Transfer", ru: "Передача данных", kz: "Деректер беру", zh: "数据传输", de: "Datenübertragung" },
    icon: "wifi",
    image: "/data-transfer-modules.jpg",
    productCount: 112,
  },
  {
    id: "industrial",
    name: { en: "Industrial", ru: "Промышленные", kz: "Өнеркәсіптік", zh: "工业", de: "Industrie" },
    icon: "factory",
    image: "/industrial-electronics-equipment.jpg",
    productCount: 267,
  },
  {
    id: "mobile",
    name: { en: "Mobile", ru: "Мобильные", kz: "Мобильді", zh: "移动", de: "Mobil" },
    icon: "smartphone",
    image: "/mobile-device-accessories-chargers.jpg",
    productCount: 198,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: {
      en: "Multron Station 7-in-1 Hub",
      ru: "Мультифункциональный хаб Multron Station 7-in-1",
      kz: "Multron Station 7-in-1 мультифункционалды хаб",
      zh: "Multron Station 7合1集线器",
      de: "Multron Station 7-in-1 Hub",
    },
    description: {
      en: "Aluminum hub with USB 3.0 ports, card reader (SD/TF), 3.5mm audio jack and USB-C. Equipped with dual connector (USB-A + USB-C) for connection to any computers.",
      ru: "Алюминиевый разветвитель с портами USB 3.0, картридером (SD/TF), аудиоразъемом 3.5 мм и USB-C. Оснащен двойным штекером (USB-A + USB-C) для подключения к любым компьютерам.",
      kz: "USB 3.0 порттары, карта оқуышы (SD/TF), 3.5мм аудио разъемі және USB-C бар алюминий хаб. Кез келген компьютерлерге қосылу үшін қос штекермен (USB-A + USB-C) жабдықталған.",
      zh: "带USB 3.0端口、读卡器（SD/TF）、3.5mm音频插孔和USB-C的铝合金集线器。配备双连接器（USB-A + USB-C），可连接任何计算机。",
      de: "Aluminium-Hub mit USB-3.0-Anschlüssen, Kartenleser (SD/TF), 3,5-mm-Audioanschluss und USB-C. Ausgestattet mit Doppelstecker (USB-A + USB-C) für die Verbindung mit jedem Computer.",
    },
    category: "connectors",
    price: 49.99,
    image: "/products/MLT-HB-701-GR.png",
    badge: "new",
    inStock: true,
    sku: "MLT-HB-701-GR",
  },
  {
    id: "2",
    name: {
      en: "Multron Type-C to HDMI 4K Adapter",
      ru: "Переходник Multron Type-C to HDMI 4K",
      kz: "Multron Type-C to HDMI 4K адаптері",
      zh: "Multron Type-C转HDMI 4K适配器",
      de: "Multron Type-C zu HDMI 4K Adapter",
    },
    description: {
      en: "Compact adapter for outputting images from laptop or phone to TV/monitor via HDMI. Also features additional USB port and pass-through PD charging.",
      ru: "Миниатюрный адаптер для вывода изображения с ноутбука или телефона на телевизор/монитор через HDMI. Также имеет дополнительный USB-порт и сквозную зарядку PD.",
      kz: "Ноутбук немесе телефоннан HDMI арқылы теледидар/мониторға сурет шығару үшін миниатюралық адаптер. Сондай-ақ қосымша USB порты және PD зарядтауы бар.",
      zh: "用于通过HDMI将笔记本电脑或手机图像输出到电视/显示器的紧凑型适配器。还具有额外的USB端口和直通PD充电功能。",
      de: "Kompakter Adapter zur Ausgabe von Bildern vom Laptop oder Telefon auf TV/Monitor über HDMI. Verfügt auch über einen zusätzlichen USB-Anschluss und Durchgangs-PD-Ladung.",
    },
    category: "connectors",
    price: 29.99,
    image: "/products/MLT-AD-HDMI-SL.png",
    badge: "new",
    inStock: true,
    sku: "MLT-AD-HDMI-SL",
  },
  {
    id: "3",
    name: {
      en: "Multron Roll 3-in-1 Retractable Cable",
      ru: "Выдвижной кабель Multron Roll 3-в-1",
      kz: "Multron Roll 3-in-1 шығарылатын кабель",
      zh: "Multron Roll 3合1伸缩线",
      de: "Multron Roll 3-in-1 Einziehkabel",
    },
    description: {
      en: "Convenient cable in a retractable case that doesn't tangle when carried. Has three connectors (Type-C, Micro-USB, Lightning) for simultaneous charging of different gadgets.",
      ru: "Удобный кабель в рулетке, который не запутывается при переноске. Имеет три коннектора (Type-C, Micro-USB, Lightning) для одновременной зарядки разных гаджетов.",
      kz: "Тасымалдау кезінде шатаспайтын ыңғайлы рулеткадағы кабель. Түрлі гаджеттерді бір уақытта зарядтау үшін үш коннекторға (Type-C, Micro-USB, Lightning) ие.",
      zh: "方便的可伸缩线缆，携带时不会缠结。具有三个连接器（Type-C、Micro-USB、Lightning），可同时为不同设备充电。",
      de: "Praktisches Kabel in einem einziehbaren Gehäuse, das sich beim Tragen nicht verheddert. Hat drei Anschlüsse (Type-C, Micro-USB, Lightning) zum gleichzeitigen Laden verschiedener Geräte.",
    },
    category: "cables",
    price: 24.99,
    image: "/products/MLT-CB-3IN1-BL.png",
    inStock: true,
    sku: "MLT-CB-3IN1-BL",
  },
  {
    id: "4",
    name: {
      en: "Multron DisplayPort Link Adapter",
      ru: "Адаптер Multron DisplayPort Link",
      kz: "Multron DisplayPort Link адаптері",
      zh: "Multron DisplayPort Link适配器",
      de: "Multron DisplayPort Link Adapter",
    },
    description: {
      en: "Adapter for connecting monitors or projectors to computer graphics card via DisplayPort connector. Provides stable digital video signal transmission.",
      ru: "Переходник для подключения мониторов или проекторов к видеокарте компьютера через разъем DisplayPort. Обеспечивает стабильную передачу цифрового видеосигнала.",
      kz: "DisplayPort разъемі арқылы мониторлар немесе проекторларды компьютердің бейне картасына қосуға арналған адаптер. Цифрлық бейне сигналын тұрақты беруді қамтамасыз етеді.",
      zh: "用于通过DisplayPort连接器将显示器或投影仪连接到计算机显卡的适配器。提供稳定的数字视频信号传输。",
      de: "Adapter zum Anschließen von Monitoren oder Projektoren an die Grafikkarte des Computers über den DisplayPort-Anschluss. Gewährleistet stabile digitale Videosignalübertragung.",
    },
    category: "connectors",
    price: 19.99,
    image: "/products/MLT-DP-BLK.png",
    inStock: true,
    sku: "MLT-DP-BLK",
  },
  {
    id: "5",
    name: {
      en: "Multron Soft Touch Tablet Case",
      ru: "Чехол-накладка Multron Soft Touch",
      kz: "Multron Soft Touch планшет қапшығы",
      zh: "Multron Soft Touch平板保护套",
      de: "Multron Soft Touch Tablet-Hülle",
    },
    description: {
      en: "Durable black tablet case with matte finish. Protects device from scratches and impacts, providing reliable grip thanks to textured sides.",
      ru: "Прочный черный чехол для планшета с матовым покрытием. Защищает устройство от царапин и ударов, обеспечивая надежный хват благодаря текстурным боковинам.",
      kz: "Матты жабыны бар берік қара планшет қапшығы. Құрылғыны сызықтар мен соққылардан қорғайды, текстуралық бүйірлерінің арқасында сенімді ұстауды қамтамасыз етеді.",
      zh: "带哑光表面的耐用黑色平板保护套。保护设备免受划痕和冲击，凭借纹理侧面提供可靠的抓握。",
      de: "Langlebige schwarze Tablet-Hülle mit mattem Finish. Schützt das Gerät vor Kratzern und Stößen und bietet dank strukturierter Seiten einen zuverlässigen Halt.",
    },
    category: "mobile",
    price: 14.99,
    image: "/products/MLT-CS-TAB-10.png",
    inStock: true,
    sku: "MLT-CS-TAB-10",
  },
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId)
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
