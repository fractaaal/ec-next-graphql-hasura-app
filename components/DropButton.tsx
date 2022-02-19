import { useState } from 'react'
import { useCartItemState } from '../modules/recoil-state/useCartItemState'
import { GetServerSideProps } from 'next'
import ShopList from '../components/ShopList'
import { sdk } from '../modules/graphql-client/client'
import { Layout } from '../components/Layout'
import { Dropdown } from '../components/DropDown'
import { usedropDownNameSateState } from '../modules/recoil-state/useDropDownNameState'

export type ItemIndexProps = {
  categories: Array<{
    id: string
    name: string
    index: number
  }>
  categoryName: string
}

export const DropButton: React.FC<ItemIndexProps> = ({
  categories,
  categoryName,
}) => {
  const { dropDownNameState, setDropDownNameState } = usedropDownNameSateState()

  const handleChange = (name: string): void => {
    setDropDownNameState(name)
  }
  return (
    <Dropdown categoryName={categoryName}>
      <a
        href="/item/"
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
        role="menuitem"
      >
        すべて
      </a>
      {categories.map((category, index) => {
        return (
          <a
            href={`/item/${category.name}/1`}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            key={index}
            onClick={() => handleChange(category.name)}
          >
            {category.name}
          </a>
        )
      })}
    </Dropdown>
  )
}
