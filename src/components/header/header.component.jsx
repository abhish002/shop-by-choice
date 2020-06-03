import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../selectors/user/user.selector';
import { selectCartHidden } from '../../selectors/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartMenu from '../../components/cart-menu/cart-menu.component';

import { APPLICATION_TITLE } from '../../constants/application.constants';

import {
  HeaderContainer,
  LogoContainer,
  ApplicationTitle,
  Options,
  Option,
  DisplayName,
} from './header.styles'

const Header = ({ currentUser, hidden }) => {
  const signinSignoutLink = currentUser ?
    <div className='header__options__option' onClick={() => auth.signOut()}>SIGN OUT</div> :
    <Link className='header__options__option' to='/signin'>SIGN IN</Link>
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
        <ApplicationTitle>
          {APPLICATION_TITLE}
        </ApplicationTitle>
      </LogoContainer>
      <Options>
        <Option to='/shop'>SHOP</Option>
        <Option to='/contact'>CONTACT</Option>
        {signinSignoutLink}
        <DisplayName as='div'>
          {currentUser && `Welcome, ${currentUser.currentUser.displayName}!`}
        </DisplayName>
        <CartIcon />
      </Options>
      {hidden ? '' : <CartMenu />}
    </HeaderContainer>
  )
}

const mapStateToprops = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToprops)(Header)
