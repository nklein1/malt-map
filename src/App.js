import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import HomePage from './containers/homepage/homepage.jsx';
import RatingPage from './containers/ratingpage/ratingpage.jsx';
import VXPage from './containers/vxpage/vxpage.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter basename='/malt-map'>
        <Route exact path='/' component={VXPage} />
        <Route path='/ratings' component={RatingPage} />
        <Route path='/victory' component={HomePage} />
      </HashRouter>
    </div>
  );
}

export default App;

