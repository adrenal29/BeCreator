import React from 'react'
import { Link } from 'react-router-dom'
import './feature.scss'
export const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Transforming 21st generation Creator Economy</h1>

                    <div className="search">
                        <div className="searchInput">
                            <img src="/img/search.png" alt="" />
                            <input type="text" placeholder='Unleash the creator inside you' />
                        </div>
                        <Link to='/register'><button>Join Now</button></Link>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Creator</button>
                        <button>Fan</button>
                        <button>Brand</button>
                    </div>
                </div>
                <div className="right">
                    <img src="/img/man.png" alt="" />
                </div>
            </div>
        </div>
    )
}
