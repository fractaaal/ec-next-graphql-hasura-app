import { GetServerSideProps } from 'next'
import ShopList from '../components/ShopList'
import { sdk } from '../modules/graphql-client/client'
import { Layout } from '../components/Layout'
import { useCartItemState } from '../modules/recoil-state/useCartItemState'
import { useEffect } from 'react'
import { LOCAL_STRAGE_KEY } from '../modules/data/localStrageKey'

export default function Cart() {
  const { cartItemState, setCartItemState } = useCartItemState()
  useEffect(() => {
    const cartItemsJSON = localStorage.getItem(LOCAL_STRAGE_KEY)
    const cartItems = JSON.parse(cartItemsJSON)
    setCartItemState(cartItems)
  }, [])

  return (
    <Layout>
      <ShopList items={cartItemState} />
    </Layout>
  )
}
