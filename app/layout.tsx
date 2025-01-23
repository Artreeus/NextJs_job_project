import type { Metadata } from "next";
import { Syne } from "next/font/google"; // Import Syne font
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "AARONN - Creative Designer & Developer",
  description: "Portfolio website showcasing creative design and development work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#1E1E1E] font-sans antialiased",
          syne.variable // Apply Syne font
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-6">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="text-xl font-bold tracking-wider">
                  <img src="blogo.png" alt="" />
                </span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                <Link
                  href="/"
                  className="transition-colors hover:text-white/80 text-white/90"
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white/80 text-white/90"
                >
                  ABOUT ME
                </Link>
                <Link
                  href="/works"
                  className="transition-colors hover:text-white/80 text-white/90"
                >
                  MY WORKS
                </Link>
                <Link
                  href="/contact"
                  className="bg-zinc-800/50 backdrop-blur-sm px-6 py-2 rounded-full transition-colors hover:bg-zinc-700/50"
                >
                  CONTACT
                </Link>
              </nav>

              {/* Hamburger Menu for mobile */}
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-12 py-20 bg-black ">
            <div className="container ">
              <div className="text-center space-y-4 ">
                <p className="text-orange-500 text-sm">Get in Touch With Us</p>
                <a
                  href="mailto:info@aaronn.com"
                  className="md:text-6xl font-bold hover:underline inline-block border-b border-white/10 pb-2"
                >
                  info@aaronn.com
                </a>
              </div>
              <div className="mt-20 flex flex-col md:flex-row items-center justify-between pt-8 ">
                <a href="/" className="flex items-center">
                  <img src="blogo.png" alt="" />
                </a>
                <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
                  <p className="text-sm text-white/60">Street Avenue 21, CA</p>
                  <p className="text-sm text-white/60">+9 0283353</p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-white/60 hover:text-white">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white/60 hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white/60 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-white/40 mt-8 border-t border-white/10 py-5">
                © 2023. Ideapeel. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
