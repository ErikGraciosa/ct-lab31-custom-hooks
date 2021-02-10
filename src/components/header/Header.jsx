import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <p>Welcome to Dimension C-132</p>
      <Link className="nav-link-button" to="/">| Home |</Link>
    </div>
  );
};

export default Header;
