import React, { useState ,useEffect} from 'react'
import { GigCard } from '../../components/GigCard/GigCard'
import { gigs } from '../../data'
import './gigs.scss'
export const Gigs = () => {
  const [open, setOpen] = useState("revenue")
  const [sort, setSort] = useState(false)
  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  const [cData,setData]=useState([])
  useEffect(()=>{
      fetch('http://localhost:8800/api/gigs/?cat=music')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setData(data)
       // logs the last 5 documents retrieved from the database
      })
      .catch(error => {
          console.error(error);
      });
  },[])
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadCrumbs'>beCreator Lifystyle Vlogging </span>
        <h1>Creators</h1>
        <p>Explore beCreator exclusive range of artists </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' name="" id="" />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">{sort === "revenue" ? "Revenue" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => { setOpen(!open) }} />
            {open && <div className="rightMenu">
              {sort === "revenue" ?
                (<span onClick={() => { reSort("createdAt") }}>Newest</span>) :
                (<span onClick={() => { reSort("revenue") }}>Revenue</span>)}
            </div>}
          </div>
        
        
        </div>
        <div className="cards">  {cData.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}
