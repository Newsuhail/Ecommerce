import React from 'react'
import './Fotter.css'
import instagram from '../Assets/instagram_logo.png'
import pintester from '../Assets/Pinterest-logo.png'
import whatsapp from '../Assets/WhatsApp_icon.png.webp'

export default function Fotter() {
  return (
    <div className='fotter'>
        <div className="fotter-logo">
            <img src="" alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="fotter-links">
            <li>COMPANY</li>
            <li>PRODUCTS</li>
            <li>OFFICIES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <div className="foter-social-icon">
                <div className="foter-icon-container">
                    <img src={instagram} alt="" />
                </div>
                <div className="foter-icon-container">
                    <img src={pintester} alt="" />
                </div>
                <div className="foter-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
        </div>
        <div className="foter-copyright">
            <hr/>
            <p>copyright @ 2023 All-Right Reserved</p>
        </div>
    </div>
  )
}
