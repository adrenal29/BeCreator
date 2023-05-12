import React from 'react'
import { Featured } from '../../components/featured/Featured'
import { Slide } from '../../components/Slide/Slide'
import './home.scss'
import How3 from './landingComp/How3'
export const Home = () => {
  return (
    <div>
      <Featured/>
      <How3/>
      <Slide/>
      
    </div>
  )
}
