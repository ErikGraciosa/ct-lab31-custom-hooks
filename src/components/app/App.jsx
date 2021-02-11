import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import AllCharacters from '../../containers/allCharacters/AllCharacters';
import Details from '../../containers/details/Details';
import { ThemeProvider } from '../../hooks/toggleThemeContext';

export default function App() {
  return (
    <div>
      <Router>
        <ThemeProvider>
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact
              component={AllCharacters} 
            />
            <Route 
              path="/characters/:id" 
              exact
              component={Details} 
            />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}
