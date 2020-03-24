import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import DogPoster from './Poster';
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
                <DogPoster/>
                <DogPoster/>
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
