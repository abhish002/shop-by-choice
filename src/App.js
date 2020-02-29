import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from '../src/components/header/header.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={HatsPage} />
        <Route exact path='/shop/sneakers' component={HatsPage} />
        <Route exact path='/shop/womens' component={HatsPage} />
        <Route exact path='/shop/mens' component={HatsPage} />
      </Switch>

    </div>
  );
}

export default App;
