import React from 'react'
import { Link } from 'react-router-dom'
import listListings from '../../datas/listListings.json'
import './Listings.scss';

function Listings() {
    const listings = listListings
  return (
    <div className='listings-wrapper'>
        <ul className='listings-container'>
            {listings.map(({id, title, cover}) => (
                <li 
                key={id} 
                className='listing'>
                    <img src={cover} alt="cover" />
                    <Link to={`/listings/${id}`}>
                        <h2>{title}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Listings