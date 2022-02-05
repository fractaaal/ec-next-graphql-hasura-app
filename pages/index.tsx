import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import ShopList from '../components/ShopList'
import { ShopListProps } from '../components/ShopList'
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
