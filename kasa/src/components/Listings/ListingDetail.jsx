// import React from 'react'
// import listListings from '../../datas/listListings.json'

// function ListingDetail() {
//   return (
//     <div>LogementDetail
//       <div className="image">Image</div>
//       <div className="blabla"> 
//         <h2>k</h2>
//         <p>Sous titre</p>
//         <div>tags</div>
//         <div>
//           <div>description</div>
//           <div>Equipements</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ListingDetail

import React from 'react'
import { useParams } from 'react-router-dom'
import listListings from '../../datas/listListings.json'
// import './ListingDetail.scss';

function ListingDetail() {
  const { id } = useParams();
  const listing = listListings.find(listing => listing.id === id);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className='listing-detail'>
      <div className="image">
        <img src={listing.pictures[0]} alt={listing.title} />
      </div>
      <div className="details">
        <h2>{listing.title}</h2>
        <p>{listing.subtitle}</p>
        <div className="tags">
          {listing.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{listing.description}</p>
        </div>
        <div className="equipments">
          <h3>Equipements</h3>
          <ul>
            {listing.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListingDetail