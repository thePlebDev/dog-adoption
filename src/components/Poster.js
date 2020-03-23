import React from 'react';
import PropTypes from 'prop-types';

import './styles/poster.css'
import DataComponent from './DataComponent';

//need to re-add the image tag with the data src 
const Poster = ({data,name,age})=>{
  return(
    <div className="poster-container">
      <div className="poster-inner-container">
          <div className="poster-image">

          </div>
          <div className="details">

              <div className="poster-name">Name: {name}</div>
              <div className="poster-age">Age: {age}</div>
          </div>
      </div>
    </div>
  )
}

Poster.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number
}
Poster.defaultProps ={
  name:' not avalible'
}
const DoggyPoster = DataComponent(Poster); // this is the HOC that will give the poster acces to some state. THis will then be exported instead

export default DoggyPoster;
