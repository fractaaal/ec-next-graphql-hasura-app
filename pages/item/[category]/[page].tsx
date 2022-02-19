import { useEffect } from 'react'
import { useCartItemState } from '../../../modules/recoil-state/useCartItemState'
import { GetServerSideProps } from 'next'
import ShopList from '../../../components/ShopList'
import { sdk } from '../../../modules/graphql-client/client'
import { Layout } from '../../../components/Layout'
import { DropButton } from '../../../components/DropButton'
import Link from 'next/link'

export default function Home({ items, categories, categoryName }) {
  return (
    <Layout>
      <DropButton categories={categories} categoryName={categoryName} />
      <ShopList items={items} />
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-10">
        <div className="max-w-xl flex flex-col items-center text-center mx-auto">
          <Link href={'/item/'}>
            <button className="bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
              Back to Toppage
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryName = String(context.query.category)
  const pageNumber = Number(context.query.page)
  const limit = 2
  const offset = limit * (pageNumber - 1)
  const { items } = await sdk.orderCategoryItems({
    offset: offset,
    limit: limit,
    category: categoryName,
  })
  const { categories } = await sdk.allCategories()
  console.log(categoryName)
  return {
    props: { items, categories, categoryName },
  }
}
