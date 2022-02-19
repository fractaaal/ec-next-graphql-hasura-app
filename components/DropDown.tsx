import React, { useRef, useState, useEffect } from 'react'
import { usedropDownNameSateState } from '../modules/recoil-state/useDropDownNameState'

export const Dropdown = ({ categoryName, children }) => {
  const { dropDownNameState, setDropDownNameState } = usedropDownNameSateState()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLInputElement>()

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleOutsideClick = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  console.log(categoryName)

  return (
    <>
      <div ref={dropdownRef} className="relative inline-block text-left">
        <span className="rounded-md shadow-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {categoryName}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>

        {isOpen && (
          <>
            <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg z-50">
              <div className="rounded-md bg-white shadow-xs">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {children}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
