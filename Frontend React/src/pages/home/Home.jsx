import React from 'react'
import { Featured } from '../../components/featured/Featured'
import { Slide } from '../../components/Slide/Slide'
import './home.scss'
export const Home = () => {
  return (
    <div>
      <Featured/>
      <Slide/>
    </div>
  )
}
