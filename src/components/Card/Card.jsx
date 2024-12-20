import React from 'react'
import './Card.css'
const Card = ({emoji,heading,detail,color}) => {
  return (
    <div className="Card" style={{borderColor: {color}}}>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href="https://github.com/hg9336099029">
          <button className=" c-button">Learn More</button>
        </a>
    </div>

    
  )
}

export default Card;