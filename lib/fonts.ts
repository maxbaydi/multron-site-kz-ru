import localFont from "next/font/local"

export const notoSans = localFont({
  src: [
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Noto_Sans/static/NotoSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-noto-sans",
  display: "swap",
})

