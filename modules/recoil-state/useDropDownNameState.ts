import React, { useCallback, useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { LOCAL_STRAGE_KEY } from '../data/localStrageKey'

const dropDownNameSateAtom = atom<string>({
  key: 'dropDownNameSate',
  default: 'すべて',
})

export const usedropDownNameSateState = () => {
  const [dropDownNameState, setDropDownNameState] =
    useRecoilState(dropDownNameSateAtom)

  return {
    dropDownNameState,
    setDropDownNameState,
  }
}
