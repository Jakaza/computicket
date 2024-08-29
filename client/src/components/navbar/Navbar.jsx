import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <a href='/' className="logo">
          <img src="/logo.png" alt="" />
        </a>
        <ul>
          <li>EVENTS</li>
          <li><Link className='navLink' to={`/events`}>BROWSE EVENTS</Link></li>
          <li><Link className='navLink' to={`/login`}>LOGIN</Link> </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar