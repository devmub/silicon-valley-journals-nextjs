import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold">Silicon Valley Journals</h1>
        <p className="mt-4">Coming soon - a faster, more responsive news experience.</p>
      </main>

      <Footer />
    </div>
  )
}

