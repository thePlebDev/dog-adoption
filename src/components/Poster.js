import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles/poster.css'


//need to re-add the image tag with the data src
const Poster = ({dogs})=>{
  console.log(dogs)
  return <div>This is from the Poster</div>
}

Poster.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number
}
Poster.defaultProps ={
  name:' not avalible'
}
const mapState = (state)=>{
  const { dogs } = state;
  return{dogs}
}

const DogPoster= connect(mapState)(Poster)

export default DogPoster

//how will the state interact with the props
