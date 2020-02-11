import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import HomePage from './containers/homepage/homepage.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter basename='/malt-map'>
        <Route exact path='/' component={HomePage} />
      </HashRouter>
    </div>
  );
}

export default App;

