import React from 'react'
import { Link } from 'react-router-dom'
import listListings from '../../datas/listListings.json'
import './Listings.scss';

function Listings() {
  return (
    <div className='listings-wrapper'>
        <ul className='listings-container'>
            {listListings.map((listing) => (
                <li key={listing.id} className='listing'>
                    <Link to={`/listings/${listing.id}`}>
                        <h2>{listing.title}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Listings