import React from 'react';


import Header from './header';
import DoggyPoster from './Poster';
import './styles/app.css';

const App = () =>{
  return(
    <div>
      <Header title="Puppy adoption center" />
      <div className="kitty-poster-section">
          <DoggyPoster name="bob" age={4} />
          <DoggyPoster name="rofus" age={7} />
          <DoggyPoster name="taco" age={2} />
          <DoggyPoster  name="beans" age={9}/>
          <DoggyPoster  name="dean" age={10}/>
          <DoggyPoster name="robo" age={4} />
      </div>

    </div>

  )
}

export default App;
