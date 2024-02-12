import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/new_collection.js/product_1.jpg'

export default function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>offers For You</h1>
            <p>ONLY ON BEST SELLET PRODUCTS</p>
            <button>CHECK NOW</button>
      </div>
      <div className="offers-right">
            <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}
