import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer on your Email</h1>
      <p>Subscribe to our newsletter and stay update </p>
      <div>
        <input type="email" placeholder='your email ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
