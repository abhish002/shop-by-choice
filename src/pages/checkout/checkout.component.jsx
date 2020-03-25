import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../selectors/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

function CheckoutPage({ cartItems, cartTotal }) {
    const checkoutItems = cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ));
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span></span>Quantity</div>
                <div className='header-block'><span></span>Price</div>
            </div>
            {checkoutItems}
            <div className='total'>Total: {cartTotal}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
