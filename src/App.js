import React, { Component, lazy, Suspense } from 'react';
import './App.css';

import Header from '../src/components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { Route, Switch, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from '../src/actions/user/user.action';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../src/selectors/user/user.selector';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));

const SigninAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('../src/pages/checkout/checkout.component'));

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/signin' render={() =>
                this.props.user ?
                  (<Redirect to='/' />) :
                  <SigninAndSignUpPage />
              } />
              <Route exact path='/checkout' component={CheckoutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    )
  }
}

const mapStateToprops = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToprops = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(App)

