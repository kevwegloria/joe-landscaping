import React from 'react'

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Tree} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/'>
        <h1> <Tree  />   Joe Landscaping</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/home' activeStyle>
          Home
        </NavLink>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/services' activeStyle>
          Services
        </NavLink>
        <NavLink to='/contact-us' activeStyle>
          Contact Us
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/getaquote'>Get a Quote</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
