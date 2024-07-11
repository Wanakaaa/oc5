import React from 'react'
import './Home.scss';
import image from '../../assets/IMG.png'
import Listings from '../Listings/Listings';
import Banner from './Banner'

function Home() {

  return (
    <div>
      <div>
        <Banner image={image}>Chez vous, partout et ailleurs</Banner>
      </div>
      <div className='listings'>
        <Listings />
      </div> 
    </div>
  )
}

export default Home