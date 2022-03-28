import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBrand
  } from './NavbarElements';

function Navigation() {
    return ( 
        <Nav>
        <NavBrand>Aaron Ferguson</NavBrand>
        <NavMenu>
          <NavLink to='/Profile' activeStyle>
            Profile/Store  
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Search
          </NavLink>
        </NavMenu>
      </Nav>
    );
}

export default Navigation;