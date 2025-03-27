import "./globals.css"

export const metadata = {
  title: "Silicon Valley Journals",
  description: "Latest tech news, funding updates, and startup information",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

