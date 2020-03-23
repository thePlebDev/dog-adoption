import React from 'react';
import PropTypes from 'prop-types';

import './styles/header.css';



const Header = ({ title = "" }) =>{
  return(
    <div className="container">
      <div className="title-container">
        { title }
      </div>
    </div>
  )
}

Header.propTypes ={
  title:PropTypes.string
}

export default Header
