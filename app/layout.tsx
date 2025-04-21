import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sheikh Khizar Nadeem - Python Developer",
  description: "Portfolio of Sheikh Khizar Nadeem, a Senior Python Developer specializing in Django, FastAPI, Flask, and Pyramid frameworks.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}