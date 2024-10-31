import React, { useState } from 'react';
import './Benefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faMedal, faUserGroup, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const Benefits = () => {
  const [benefits] = useState([{
    ben_id: uuidv4(),
    ben_icon:<FontAwesomeIcon icon={faHeartCircleCheck}/>,
    ben_title:"ETHICALLY SOURCED",
    ben_parag:"Ethics matter. We carefully select our partners and materials to ensure quality and peace of mind for you."
  },
  {
    ben_id: uuidv4(),
    ben_icon:<FontAwesomeIcon icon={faMedal}/>,
    ben_title:"LEADING THE WAY",
    ben_parag:"We are proud to be one of the world's leading hijab brands, dedicated to providing the best hijab experience"
  },
  {
    ben_id: uuidv4(),
    ben_icon:<FontAwesomeIcon icon={faUserGroup}/>,
    ben_title: "ACCESSIBLE SOLUTIONS",
    ben_parag:"We believe every woman deserves access to the right hijab, and we strive to make this a reality."
  },
  {
    ben_id: uuidv4(),
    ben_icon:<FontAwesomeIcon icon={faHandHoldingDollar}/>,
    ben_title:"FREE & FAST SHIPPING",
    ben_parag:"Enjoy 2-day shipping across Canada, the USA, and Europe. We're committed to delivering your order quickly and at no extra cost."
  }
]);
  return (
    <div className='benefits-container'>
        <div className='benefits-cards'>
          {benefits.map(benefit =>{
            return(
          <div className='b-card' key={benefit.ben_id}>
            {benefit.ben_icon}
            <h1>{benefit.ben_title}</h1>
            <p>{benefit.ben_parag}</p>
          </div>
        )})};
        </div>
      
    </div>
  )
}

export default Benefits
