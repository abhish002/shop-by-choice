import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../selectors/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-menu.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCart } from '../../actions/cart/cart.actions';

function CartMenu({ cartItems, history, dispatch }) {
  const items = cartItems.map(cartItem => (
    <CartItem key={cartItem.id} item={cartItem} />
  ));
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length > 0 ?
            items :
            <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCart());
      }}>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartMenu));
