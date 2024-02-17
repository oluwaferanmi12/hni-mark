import { TextTypes } from '@/types'
import React from 'react'

export const NavText = ({active , text}:TextTypes.InputTextType) => {
  return (
    <span>
      <p className={`${active ? "text-hblue500" : "text-hgrey500"}`}>{text}</p>
    </span>
  )
}

