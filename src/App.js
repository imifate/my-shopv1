import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/../pages/homepage/homepage.component';

import './App.css';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
