import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import DoggyPoster from './Poster';
import Login from './Login';
import SignUp from './SignUp';
import './styles/app.css';

const App = () =>{
  return(
    <div>
      <Header title="Puppy adoption center" />

      <Switch>
        <Route exact path="/">
            <div className="kitty-poster-section">
                <DoggyPoster name="bob" age={4} />
                <DoggyPoster name="rofus" age={7} />
                <DoggyPoster name="taco" age={2} />
                <DoggyPoster  name="beans" age={9}/>
                <DoggyPoster  name="dean" age={10}/>
                <DoggyPoster name="robo" age={4} />
            </div>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

      </Switch>

    </div>

  )
}

export default App;
