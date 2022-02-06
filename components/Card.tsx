import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '../modules/data/categories'

export type CardProps = {
  item: {
    id: string
    name: string
    category: number
    detail: string
    price: number
    image_url: string
  }
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="max-w-xs w-72 rounded overflow-hidden shadow-lg mx-2 my-2">
      <Link href={`/detail/${item.id}`}>
        <a>
          <Image
            className="w-full"
            width={400}
            height={300}
            src="/images/item-sample.png"
            alt="Sunset in the mountains"
          />
        </a>
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <div className="font-bold text-xl mb-2">¥{item.price}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ul className="flex">
          <li className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{categories[item.category]}
          </li>
          <li className="">
            <button className="inline-flex items-center px-3 py-1 bg-gray-800 hover:bg-gray-500 text-white font-bold rounded">
              <span className="inline-block mr-0">
                <Image
                  className="w-full"
                  width={20}
                  height={20}
                  src="/images/cart_icon_white.png"
                  alt="Sunset in the mountains"
                />
              </span>
              <span>カートに入れる</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
