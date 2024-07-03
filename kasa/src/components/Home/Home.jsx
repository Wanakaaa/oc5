import React from 'react'
import './Home.scss';
import image from '../../assets/IMG.png'
import Listings from '../Listings/Listings';

function Home() {
  const bannerText = "Chez vous, partout et ailleurs";

  return (
    <div>
      <div className="banner-home">
        <img src={image} alt="falaise" />
        <div class="bannerText">{bannerText}</div>
      </div>

      <div className='listings'>
        <Listings />
      </div>
        
    </div>
  )
}

export default Home