import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useCartItemState } from '../modules/recoil-state/useCartItemState'
import { LOCAL_STRAGE_KEY } from '../modules/data/localStrageKey'

export const Layout: React.FC = ({ children }) => {
  const { cartItemState, setCartItemState } = useCartItemState()
  useEffect(() => {
    const cartItemsJSON = localStorage.getItem(LOCAL_STRAGE_KEY)
    const cartItems = JSON.parse(cartItemsJSON)
    setCartItemState(cartItems)
  }, [])

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
              <Link href="/item/">
                <a className="text-indigo-900 hover:bg-indigo-500 px-3 py-2 rounded">
                  Items
                </a>
              </Link>
              <Link href={'/cart'}>
                <a>
                  <span className="relative inline-block mr-0">
                    <Image
                      className="w-full"
                      width={30}
                      height={30}
                      src="/images/cart_icon.png"
                      alt="Sunset in the mountains"
                    />
                    {cartItemState.length !== 0 ? (
                      <div className="absolute bottom-px right-0 rounded-full h-5 w-5 flex items-center justify-center bg-red-500">
                        <span className="font-semibold text-xs text-white">
                          {cartItemState.length}
                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </span>
                </a>
              </Link>
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
