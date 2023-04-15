import React from 'react'
import './catCard.scss'
import {Link} from 'react-router-dom'
export const CatCard = ({item}) => {
  return (
    <Link to='/gigs?cat=design'>
    <div className='catCard'>
        <img src={item.cover} alt="" />
        <span className="title">{item.title}</span>
        <span className="desc">{item.shortDesc}</span>
    </div>
    </Link>
  )
}
