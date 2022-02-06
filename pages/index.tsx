import { useEffect } from 'react'
import { useCartItemState } from '../modules/recoil-state/useCartItemState'
import { GetServerSideProps } from 'next'
import ShopList from '../components/ShopList'
import { sdk } from '../modules/graphql-client/client'
import { Layout } from '../components/Layout'

export default function Home({ items }) {
  return (
    <Layout>
      <ShopList items={items} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { items } = await sdk.allItems()

  return {
    props: {
      items,
    },
  }
}
