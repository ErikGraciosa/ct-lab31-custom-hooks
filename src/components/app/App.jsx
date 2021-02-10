import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import AllCharacters from '../../containers/allCharacters/AllCharacters';
import Details from '../../containers/details/Details';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact
            component={AllCharacters} 
          />
          <Route 
            path="/:id" 
            exact
            component={Details} 
          />
        </Switch>
      </Router>
    </div>
  );
}
