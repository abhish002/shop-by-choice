import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../actions/cart/cart.actions';

function CartIcon({ toggleCart, cartItems }) {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='item-count'>{cartItems.length}</span>
    </div>
  )
};

const mapDispathToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToprops = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToprops, mapDispathToProps)(CartIcon); 
