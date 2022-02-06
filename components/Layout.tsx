import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>EC Smaple App</title>
      </Head>
      <header>
        <nav className="bg-indigo-300 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-indigo-900 hover:bg-indigo-500 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="text-indigo-900 hover:bg-indigo-500 px-3 py-2 rounded">
                  Items
                </a>
              </Link>
              <Link href="/">
                <a className="text-indigo-900 hover:bg-indigo-500 px-3 py-2 rounded">
                  Shops
                </a>
              </Link>
              <span className="relative inline-block mr-0">
                <Image
                  className="w-full"
                  width={30}
                  height={30}
                  src="/images/cart_icon.png"
                  alt="Sunset in the mountains"
                />
                <div className="absolute bottom-px right-0 rounded-full h-5 w-5 flex items-center justify-center bg-red-500">
                  <span className="font-semibold text-xs text-white">1</span>
                </div>
              </span>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
        </a>
      </footer>
    </div>
  )
}
