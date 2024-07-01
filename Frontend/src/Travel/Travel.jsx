import React from 'react'
import travelsDetails from '../assets/data/travelsDetails'
import Card from './Card'

const Travel = () => {
  return (
    <div className='set-section'>
      <div className="container">
        <div className="row justify-content-center">
          {
            travelsDetails.map((item,i)=>(
              <Card item={item} key={i}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Travel