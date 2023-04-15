import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link,Navigate,useLocation, useNavigate} from 'react-router-dom'
import './navbar.scss'
import newRequest from '../../utils/newRequest'
export const Navbar = () => {
  const navigate = useNavigate();
  const [active,setActive]=useState(false);
  const [open,setOpen]=useState(false);
  const {pathname}=useLocation();
  const isActive=()=>{
    window.scrollY>0?setActive(true):setActive(false);
  }
  useEffect(()=>{
    window.addEventListener("scroll",isActive)
    return()=>{
      window.removeEventListener("scroll",isActive)
    }
  },[])
  const currentUser=JSON.parse(localStorage.getItem("currentUser"))
  const handleLogout=async()=>{
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser",null)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={active || pathname !=="/"?"navbar active":"navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/"className='link'>
          <span className='text'>beCreator</span>
          <span className='dot'>.</span>
          </Link>
        </div>
        <div className="links">
          <span>Creator Path</span>
          <span>Explore</span>
          <span>English</span>
          <span><Link to='/login'className='opt'>Sign In</Link></span>
          {!currentUser?.isCreator && <span>Become a Creator</span>}
          {!currentUser && <button>Join</button>}
          {
            currentUser &&  (
              <div className='user' onClick={()=>setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg" } alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {!currentUser?.isCreator &&(
                  <>
                  <Link to="/mygigs" className='link'>Gigs</Link>
                  <Link to="/add" className='link'>Add new Fund Campaign</Link>
                  <Link to="/dashboard" className='link'>Dashboard</Link>
                  </>
                )}
                <Link to="/orders" className='link'>Orders</Link>
                <Link to="/messages" className='link'>Messages</Link>
                <Link to="/" className='link' onClick={handleLogout}>Logout</Link>
              </div>}
              </div>
            )
          }
        </div>
       
      </div>
      { (active || pathname!=="/") && (
        <>
         <hr/>
        <div className="menu">
          <Link to="" className="link" >Creator</Link>
          <Link to="" className="link" >Fund</Link>
          <Link to="" className="link" >PFM</Link>
          <Link to="" className="link" >Store</Link>
          <Link to="" className="link" >Trending</Link>
          <Link to="" className="link" >latest</Link>
          <Link to="" className="link" >Credit</Link>
        </div>
        </>
      )}
    </div>
  )
}
