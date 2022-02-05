import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export type CardProps = {
  item: {
    name: string
    category: number
    detail: string
    price: number
    image_url: string
  }
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg   mx-50 my-50">
      <Image
        className="w-full"
        width={400}
        height={300}
        src="/images/item-sample.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <div className="font-bold text-xl mb-2">¥{item.price}</div>
        <p className="text-gray-700 text-base">{item.detail}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.category}
        </span>
      </div>
    </div>
  )
}
