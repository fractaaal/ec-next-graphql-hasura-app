import React, { VFC } from 'react'
import { Card } from './Card'

export type ShopListProps = {
  items: Array<{
    id: string
    name: string
    category: number
    detail: string
    price: number
    image_url: string
    shop: {
      id: string
      name: string
    }
  }>
}

export const ShopList: React.FC<ShopListProps> = ({ items }) => {
  console.log('rendering')
  return (
    <div className="grid grid-cols-3">
      {items.map((item, index) => {
        return <Card key={index} item={item} />
      })}
    </div>
  )
}

export default ShopList
