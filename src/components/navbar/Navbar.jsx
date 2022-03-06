import { Phone } from '@material-ui/icons'
import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="navLeft">
          <span className="logo">George Electronics</span>
        </div>
        <div className="navRight">
          <div className="navTop">
            <Phone className='phoneIcon'/>
            <span className="number">047 531 0808</span>
          </div>
          <div className="navBottom">
            <ul class="menuItems">
              <li><a href="#home" class="menuBtn">Home</a></li>
              <li><a href="#about" class="menuBtn">About</a></li>
              <li><a href="#services" class="menuBtn">Our Services</a></li>
              <li><a href="#faqs" class="menuBtn">FAQs</a></li>
              <li><a href="#contact" class="menuBtn">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
