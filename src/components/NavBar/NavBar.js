import React from 'react';
import NavItem from './NavItem';

function NavBar() {
  return (
    <div className='navBar'>
      <NavItem url='/director' text='Directors' />
      <NavItem url='/movies' text='Movies' />
      <NavItem url='/about' text='About' />
    </div>
  );
}

export default NavBar;
