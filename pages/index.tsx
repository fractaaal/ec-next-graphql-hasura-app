import { useEffect } from 'react'
import { useCartItemState } from '../modules/recoil-state/useCartItemState'
import { GetServerSideProps } from 'next'
import ShopList from '../components/ShopList'
import { sdk } from '../modules/graphql-client/client'
import { Layout } from '../components/Layout'
import Link from 'next/link'

export type HomeProps = {
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
  categories: Array<{
    id: string
    name: string
    index: number
  }>
  initCategoryName: string
}

const Home: React.FC<HomeProps> = ({ items, categories, initCategoryName }) => {
  useEffect(() => {
    const initCategoryName = 'すべて'
  }, [])
  return (
    <Layout>
      <ShopList items={items} />
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-10 mb-8">
        <div className="max-w-ml flex flex-col items-center text-center mx-auto">
          <Link href={'/item/'}>
            <button className="bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
              もっと見る
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home

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
