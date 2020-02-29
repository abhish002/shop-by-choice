import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header() {
  return (
    <div className='header'>
      <Link className='header__logo-container' to='/'>
        <Logo />
      </Link>
      <div className='header__options'>
        <Link className='header__options__option' to='/shop'>SHOP</Link>
        <Link className='header__options__option' to='/contact;'>CONTACT</Link>
      </div>
    </div>
  )
}
