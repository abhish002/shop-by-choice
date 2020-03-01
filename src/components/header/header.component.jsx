import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils'

export default function Header({ currentUser }) {
  const signinSignoutLink = currentUser ?
    <div className='header__options__option' onClick={() => auth.signOut()}>SIGN OUT</div> :
    <Link className='header__options__option' to='/signin'>SIGN IN</Link>
  return (
    <div className='header'>
      <Link className='header__logo-container' to='/'>
        <Logo />
      </Link>
      <div className='header__options'>
        <Link className='header__options__option' to='/shop'>SHOP</Link>
        <Link className='header__options__option' to='/contact'>CONTACT</Link>
        {signinSignoutLink}
      </div>
    </div>
  )
}