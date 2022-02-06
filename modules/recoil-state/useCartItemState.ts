import React, { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

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
}>

const cartItemStateAtom = atom<CartItemSateAtom>({
  key: 'cartItems',
  default: [],
})

export const useCartItemState = () => {
  const [cartItem, setCartItem] = useRecoilState(cartItemStateAtom)
  const addItem = useCallback(
    (item) => {
      setCartItem(() => {
        return [...cartItem, item]
      })
    },
    [cartItem]
  )

  const removeItem = useCallback(
    (item) => {
      setCartItem(() => {
        return cartItem.filter((id) => id !== item)
      })
    },
    [cartItem]
  )

  // const removeAllItems = () => {
  //   setCartItem([])
  // }

  return {
    cartItem,
    addItem,
    removeItem,
    // removeAllItems,
  }
}
