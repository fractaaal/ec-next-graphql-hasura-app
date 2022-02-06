import React from 'react'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { sdk } from '../../modules/graphql-client/client'
import { CardProps } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { categories } from '../../modules/data/categories'
import Link from 'next/link'

export type ItemProps = {
  item: {
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
  }
}

const ItemDetail: React.FC<ItemProps> = ({ item }) => {
  console.log(item.detail)
  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/item-sample.png"
                  width={1010}
                  height={1010}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-indigo-500 font-bold text-center md:text-left">
                {item.shop.name}
              </p>

              <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                {item.name}
              </h1>

              <h3 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                {item.price}円 (税込)
              </h3>

              <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                {item.detail}
              </p>

              <ul>
                <li className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{categories[item.category]}
                </li>
                <li className="mt-5">
                  <button className="inline-flex items-center px-3 py-1 bg-gray-800 hover:bg-gray-500 text-white font-bold rounded">
                    <span className="inline-block mr-0">
                      <Image
                        className="w-full"
                        width={20}
                        height={20}
                        src="/images/cart_icon_white.png"
                        alt="Sunset in the mountains"
                      />
                    </span>
                    <span>カートに入れる</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-10">
            <div className="max-w-xl flex flex-col items-center text-center mx-auto">
              <Link href={'/'}>
                <button className="bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded">
                  Back to Toppage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ItemDetail

export const getServerSideProps: GetServerSideProps = async (context) => {
  const itemId = context.query.id
  const { items_by_pk: item } = await sdk.pickItem({ itemId })
  //console.log(item)
  return {
    props: { item },
  }
}
