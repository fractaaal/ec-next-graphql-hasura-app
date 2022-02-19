import { useEffect } from 'react'
import { useCartItemState } from '../../modules/recoil-state/useCartItemState'
import { GetServerSideProps } from 'next'
import ShopList from '../../components/ShopList'
import { sdk } from '../../modules/graphql-client/client'
import { Layout } from '../../components/Layout'
import { DropButton } from '../../components/DropButton'
import { HomeProps } from '..'

const Index: React.FC<HomeProps> = ({
  items,
  categories,
  initCategoryName,
}) => {
  return (
    <Layout>
      <DropButton categories={categories} categoryName={initCategoryName} />
      <ShopList items={items} />
    </Layout>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async () => {
  const { items } = await sdk.allItems()
  const { categories } = await sdk.allCategories()
  const initCategoryName = 'すべて'

  return {
    props: {
      items,
      categories,
      initCategoryName,
    },
  }
}
