import React, { Component } from 'react'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SigninAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase/firebase.utils'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    if (typeof this.unSubscribeFromAuth === 'function') {
      this.unSubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninAndSignUpPage} />
          {// <Route exact path='/shop/hats' component={HatsPage} />}
            // <Route exact path='/shop/jackets' component={HatsPage} />
            // <Route exact path='/shop/sneakers' component={HatsPage} />
            // <Route exact path='/shop/womens' component={HatsPage} />
            // <Route exact path='/shop/mens' component={HatsPage} />
          }
        </Switch>
      </div>
    )
  }
}

