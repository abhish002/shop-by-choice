import React from 'react';

import './cart-menu.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

export default function CartMenu() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>Checkout</CustomButton>
    </div>
  )
}
