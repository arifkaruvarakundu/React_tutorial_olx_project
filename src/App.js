import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <Router>
        <Route path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
        <Signup />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
