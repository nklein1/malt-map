import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import HomePage from './containers/HomePage/HomePage.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Route exact path='/' component={HomePage} />
      </HashRouter>
    </div>
  );
}

export default App;

