import React from 'react'
import { FaIdCardClip } from "react-icons/fa6";
import mastercard from "../images/mastercard.png";

const Card = () => {
  return (
    <div>
        <div className='card-shopping'>
            <div className='card-design'>
                <FaIdCardClip/>
            </div>
            <div className='card-number'>
                <h6>4562 3456 45789</h6>
            </div>
            <div className='image'>
                <img src={mastercard} className='img2'/>
            </div>
            <div className='card-name'>
                <h6>CARD HOLDER</h6>
            </div>
            <div className='card-profile'>
                <h6>AAE IDProfile</h6>
                <span className='card-type'>Mastercard</span>
            </div>
        </div>
      
    </div>
  )
}

export default Card
