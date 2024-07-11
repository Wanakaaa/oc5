import React from 'react'
import './Home.scss';
import image from '../../assets/IMG.png'
import Listings from '../Listings/Listings';

function Banner({ image, children }) {
//   const bannerText = "Chez vous, partout et ailleurs";

  return (
      <div className="banner-home">
        <img src={image} alt="bannière du site, photo d'une falaise" />
        <div className="bannerText">{children}</div>
      </div> 
  )
}

export default Banner