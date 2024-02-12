import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/handicon.png'
import arrow_icon from '../Assets/arrow-circle-right-icon-2048x2048-3qikwvvj.png'
import hero_icon from '../Assets/hero_thumb.png'
export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
            <h2>NEW ARIVALS ONLY</h2>
              <div>
                    <div className='hero-hand-icon'>
                      <p>new</p>
                      <img src={hand_icon} alt=''/>
                    </div>
                    <p>collection</p>
                    <p>For every one</p>
              </div>
                <div className="hero-latest-btn">
                  <div>Latest Collection</div>
                  {/* <img src={arrow_icon} alt=""/> */}
                </div>
      </div>
        
      <div className='hero-right'>
        <img src={hero_icon} alt=""  />

      </div>
    </div>
  )
}
