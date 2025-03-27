import { SiteHeader } from '../components/site-header'
import { Footer } from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center my-12">
          Silicon Valley Journals - Coming Soon
        </h1>
        <p className="text-center text-lg mb-8">
          We're currently building a faster, more responsive version of Silicon Valley Journals.
        </p>
        <div className="flex justify-center">
          <Link href="https://siliconvalleyjournals.com" className="text-blue-600 hover:underline">
            Visit the current site
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}