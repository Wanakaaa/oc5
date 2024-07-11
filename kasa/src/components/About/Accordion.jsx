import React from 'react'
import { useState } from 'react'
import chevron from '../../assets/chevron.svg'
import './Accordion.scss'
import AboutDisplay from './AboutDisplay';

function Accordion({title, content}) {

  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible)
    console.log('executed')
  }


  return (
    <div className='accordion-container'>
      <div className='about-title'>
        <span>{title}</span>
        <img 
        src={chevron} 
        alt="chevron" 
        onClick={toggle}
        className={`chevron ${isVisible ? 'chevron-rotated' : ''}`}
        />
      </div>
      {isVisible ? <AboutDisplay content={content} /> : null}
    </div>
  )
}

export default Accordion