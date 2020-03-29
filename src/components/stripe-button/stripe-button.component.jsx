import React from 'react';
import './stripe-button.styles.scss';

import StripeCheckout from 'react-stripe-checkout';

import { STRIPE_CHECKOUT_PUBLIC_KEY } from '../../constants/application.constants';
import crown from '../../assets/crown.svg';

export default function StripeButton({ checkoutAmount }) {
  const checkoutAmountInCents = checkoutAmount * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment successful!');
  }

  return (
    <div className='strip-button'>
      <StripeCheckout
        label='Pay now'
        name='shop by choice ltd.'
        billingAddress
        shippingAddress
        image={crown}
        description={`Your total is ${checkoutAmount}`}
        amount={checkoutAmountInCents}
        token={onToken}
        stripeKey={STRIPE_CHECKOUT_PUBLIC_KEY}
      />
    </div>
  )
}
