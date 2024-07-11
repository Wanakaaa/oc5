// import React, { useState } from 'react'
// import './About.scss';
// import aboutImg from '../../assets/aboutImg.png'
// import Banner from '../Home/Banner'
// import AboutSubtitles from './AboutSubtitles';
// import chevron from '../../assets/chevron.svg'
// import { Data } from './Data';


// function About() {
  
  
//   return (
//     <div>
//       <ul>Liste
//         <li>point 1</li>
        
//       </ul>
//     </div>
//   )
// }

// function About() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <div>
//         <Banner image={aboutImg}/>
//         </div>
//       <div>
//         <ul className='about-sections'>
//           {Data.map((item, id) => {
//             return <li key={id} className='about-section'>
//               <span className="collapse-title">{item.title}</span>
//               <img 
//               src={chevron}  
//               alt="chevron" 
//               onClick={() => handleClick(id)} 
//               className={openIndex === id ? 'rotate' : ''}
//               />
//             </li>
//           })}
//         </ul>
//       </div>
//     </div>
//   )
// }

export default About