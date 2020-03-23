import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles/header.css';



const Header = ({ title = "" }) =>{
  return(
    <div className="container">
      <div className="title-container">
        <div className="title">
          { title }
        </div>
        <ul className="nav-links">
          <li> <Link to="/login">Login</Link> </li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  )
}

Header.propTypes ={
  title:PropTypes.string
}

export default Header
