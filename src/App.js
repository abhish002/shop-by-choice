import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop/hats' component={HatsPage} />
      <Route exact path='/shop/jackets' component={HatsPage} />
      <Route exact path='/shop/sneakers' component={HatsPage} />
      <Route exact path='/shop/womens' component={HatsPage} />
      <Route exact path='/shop/mens' component={HatsPage} />
    </div>
  );
}

export default App;
