import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../actions/cart/cart.actions';
import { selectCartItemsCount } from '../../selectors/cart/cart.selector';

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingCartIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
};

const mapDispathToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToprops = state => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToprops, mapDispathToProps)(CartIcon); 
