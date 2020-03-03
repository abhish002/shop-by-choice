import React, { Component } from 'react'
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SigninAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Route, Switch, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { connect } from 'react-redux';
import { setCurrentUser } from '../src/actions/user/user.action';

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          });
        });
      }

      setCurrentUser(null);
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
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>
            this.props.user ?
              (<Redirect to='/' />) :
              <SigninAndSignUpPage />
          } />
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

const mapStateToprops = state => ({
  user: state.user.currentUser,
});

const mapDispatchToprops = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(App)

