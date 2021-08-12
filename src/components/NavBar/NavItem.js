import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ text, url }) => {
  var location = useLocation().pathname;

  const compareURL = () => {
    if (url === location) return true;
    else return false;
  };

  return (
    <Link
      className={!compareURL() ? 'navItem' : 'navItem activated'}
      to={compareURL() ? '/' : url}
    >
      {text}
    </Link>
  );
};

export default NavItem;
