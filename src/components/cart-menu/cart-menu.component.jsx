import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../selectors/cart/cart.selector';

import './cart-menu.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

function CartMenu({ cartItems }) {
  const items = cartItems.map(cartItem => (
    <CartItem key={cartItem.id} item={cartItem} />
  ));
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartMenu);
