import { GetServerSideProps } from 'next'
import ShopList from '../components/ShopList'
import { sdk } from '../modules/graphql-client/client'
import { Layout } from '../components/Layout'
import { useCartItemState } from '../modules/recoil-state/useCartItemState'

const { cartItem, addItem, removeItem } = useCartItemState()

export default function Cart() {
  return (
    <Layout>
      <ShopList items={cartItem} />
    </Layout>
  )
}
