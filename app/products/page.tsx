import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsPageContent } from "@/components/products-page-content"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductsPageContent />
      <Footer />
    </main>
  )
}




