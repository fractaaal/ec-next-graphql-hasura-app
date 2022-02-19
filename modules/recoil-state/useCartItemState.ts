import React, { useCallback, useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { LOCAL_STRAGE_KEY } from '../data/localStrageKey'

export type CartItemSateAtom = Array<{
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

const cartItemStateAtom = atom<CartItemSateAtom>({
  key: 'cartItemState',
  default: [],
})

export const useCartItemState = () => {
  const [cartItemState, setCartItemState] = useRecoilState(cartItemStateAtom)
  const addItem = (item) => {
    const newItem = [...cartItemState, item]
    console.log('newn', newItem)
    setCartItemState(newItem)
    localStorage.setItem(LOCAL_STRAGE_KEY, JSON.stringify(newItem))
  }

  const removeItem = (item) => {
    const newItem = cartItemState.filter((cartItem) => cartItem.id !== item.id)
    setCartItemState(newItem)
    localStorage.setItem(LOCAL_STRAGE_KEY, JSON.stringify(newItem))
  }

  return {
    cartItemState,
    setCartItemState,
    addItem,
    removeItem,
    // check,
    // removeAllItems,
  }
}
