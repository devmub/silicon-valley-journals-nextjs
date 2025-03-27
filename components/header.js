"use client"

import Link from "next/link"
import { useState } from "react"

export function SiteHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top banner */}
      {/* <div className="bg-orange-50 py-2 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">
            Join Us as a{" "}
            <Link href="/contributor" className="font-bold">
              Contributor Journalist
            </Link>
            <Link
              href="/learn-more"
              className="ml-2 inline-flex items-center justify-center rounded-full border border-gray-800 px-3 py-0.5 text-xs font-medium"
            >
              LEARN MORE
            </Link>
          </p>
        </div>
      </div> */}

      {/* Main header */}
      {/* <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16"> */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              Silicon Valley Journals
            </Link>
          </div>

          {/* Search */}
          {/* <div className="flex-1 max-w-md mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <button type="submit" className="sr-only">
                  Search
                </button>
              </form>
            </div> */}

          {/* Menu button */}
          {/* <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div> */}
          <nav className="hidden md:flex space-x-4">
            <Link href="/news" className="hover:text-gray-600">
              News
            </Link>
            <Link href="/companies" className="hover:text-gray-600">
              Companies
            </Link>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
          </nav>
        </div>
      </div>
      {/* </div>
      </div> */}

      {/* Navigation */}
      {/* <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12">
            <Link
              href="/news"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium text-gray-900"
            >
              News
            </Link>
            <Link
              href="/companies"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              Companies
            </Link>
            <Link
              href="/lists"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              Lists
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav> */}

      {/* Sub-navigation */}
      {/* <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-2 text-sm">
            <Link
              href="/vc-round"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              VC Round
            </Link>
            <Link
              href="/m-and-a"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              M&A
            </Link>
            <Link
              href="/layoffs"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              Layoffs
            </Link>
            <Link
              href="/bankruptcy"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              Bankruptcy
            </Link>
            <Link
              href="/tech"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              Tech
            </Link>
            <Link
              href="/ai"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              AI
            </Link>
            <Link
              href="/ipo"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              IPO
            </Link>
            <Link
              href="/uk-funding"
              className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              UK Funding
            </Link>
          </div>
        </div>
      </div> */}
    </header>
  )
}

