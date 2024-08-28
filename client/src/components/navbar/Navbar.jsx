import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <a href='/' className="logo">
          <img src="https://www.quicket.co.za/content/images/static/01_PrimaryLogo_4c.svg" alt="" />
        </a>
        <ul>
          <li>EVENTS</li>
          <li><Link className='navLink' to={`/events`}>BROWSE EVENTS</Link></li>
          <li>LOGIN</li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar