import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Ad Manager Demo',
  description: 'A demo page showcasing Google Ad Manager integration with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="container">
            <h1>Next.js Ad Manager Demo</h1>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Next.js Ad Manager Demo. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
