import React from 'react';
import './cart-item.styles.scss';

import { connect } from 'react-redux';

import { removeItem } from '../../actions/cart/cart.actions';

function CartItem({ item: { id, imageUrl, name, price, quantity }, dispatch }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span>{quantity} x {price}</span>
        <button className='remove-link' onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
    </div>
  )
}

export default connect(null)(CartItem);
