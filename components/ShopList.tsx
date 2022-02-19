import React, { VFC, useEffect } from 'react'
import { Card } from './Card'
import { LOCAL_STRAGE_KEY } from '../modules/data/localStrageKey'

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
    item_categories: Array<{
      category: {
        name: string
        index: number
      }
    }>
  }>
}

export const ShopList: React.FC<ShopListProps> = ({ items }) => {
  useEffect(() => {
    const appState = localStorage.getItem(LOCAL_STRAGE_KEY)
    const initialState = appState ? JSON.parse(appState) : []
    localStorage.setItem(LOCAL_STRAGE_KEY, JSON.stringify(initialState))
  }, [])
  return (
    <div className="grid grid-cols-3">
      {items.map((item, index) => {
        return (
          <Card key={index} item={item} itemCategories={item.item_categories} />
        )
      })}
    </div>
  )
}

export default ShopList
