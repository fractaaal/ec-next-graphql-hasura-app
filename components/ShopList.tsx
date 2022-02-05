import React, { VFC } from 'react'

export type ShopListProps = {
  items: Array<{ name: string }>
}

export const ShopList: React.FC<ShopListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        return <p key={index}>{item.name}</p>
      })}
    </div>
  )
}

export default ShopList
