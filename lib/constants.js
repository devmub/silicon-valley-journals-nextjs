// Site configuration
export const SITE_NAME = "Silicon Valley Journals"
export const SITE_URL = "https://new.siliconvalleyjournals.com"
export const SITE_DESCRIPTION =
  "Latest tech news, funding updates, and startup information from Silicon Valley and beyond."

// WordPress configuration
export const WP_API_URL = process.env.WORDPRESS_API_URL || "https://siliconvalleyjournals.com/graphql"

// Navigation
export const MAIN_NAVIGATION = [
  { name: "News", href: "/news" },
  { name: "Companies", href: "/companies" },
  { name: "Lists", href: "/lists" },
  { name: "Blog", href: "/blog" },
]

export const SUB_NAVIGATION = [
  { name: "VC Round", href: "/category/vc-round" },
  { name: "M&A", href: "/category/m-and-a" },
  { name: "Layoffs", href: "/category/layoffs" },
  { name: "Bankruptcy", href: "/category/bankruptcy" },
  { name: "Tech", href: "/category/tech" },
  { name: "AI", href: "/category/ai" },
  { name: "IPO", href: "/category/ipo" },
  { name: "UK Funding", href: "/category/uk-funding" },
]

