import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../actions/cart/cart.actions';

function CartIcon({ toggleCart }) {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
};

const mapDispathToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(null, mapDispathToProps)(CartIcon); 
