export function formatDate(dateString) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }
  
  export function cn(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  
  // Convert WordPress URLs to Next.js URLs
  export function convertWordPressUrl(url) {
    if (!url) return ""
  
    // Replace the WordPress domain with the Next.js domain
    const nextUrl = url.replace("https://siliconvalleyjournals.com", "")
  
    // Handle category URLs
    if (nextUrl.includes("/category/")) {
      return nextUrl.replace("/category/", "/category/")
    }
  
    // Handle post URLs
    if (nextUrl.match(/\/\d{4}\/\d{2}\/\d{2}\//)) {
      const slug = nextUrl.split("/").pop()
      return `/posts/${slug}`
    }
  
    return nextUrl
  }
  
  // Fix WordPress image URLs
  export function fixImageUrl(url) {
    if (!url) return "/placeholder.svg?height=300&width=500"
  
    // If it's already an absolute URL, return it
    if (url.startsWith("http")) {
      return url
    }
  
    // Otherwise, prepend the WordPress domain
    return `https://siliconvalleyjournals.com${url}`
  }
  
  