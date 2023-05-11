import React, { useState, useEffect } from 'react'
import './brand.scss'
const Brand = () => {
    const [proposal, setProposal] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8800/api/proposal/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProposal(data)
                // logs the last 5 documents retrieved from the database
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    return (
        <div className='list'>
            {
                proposal.map(item => (
                    <div className='proposal'>
                        {item.org}<br></br>
                        {item.text}<br></br>
                        {item.budget}<br></br>
                        {item.contact}
                    </div>
                ))
            }

        </div>
    )
}

export default Brand