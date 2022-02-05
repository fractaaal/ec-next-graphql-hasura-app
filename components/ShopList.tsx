import React, { VFC } from 'react'
import { Card } from './Card'

export type ShopListProps = {
  items: Array<{
    name: string
    category: number
    detail: string
    price: number
    image_url: string
  }>
}

export const ShopList: React.FC<ShopListProps> = ({ items }) => {
  return (
    <div className="flex columns-3">
      {items.map((item, index) => {
        return <Card key={index} item={item} />
      })}
    </div>
  )
}

export default ShopList
