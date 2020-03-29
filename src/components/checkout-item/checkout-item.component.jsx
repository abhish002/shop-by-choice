import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { removeItem, addItem, decreaseItemQty } from '../../actions/cart/cart.actions';

function CheckoutItem({ cartItem, removeItem, addItem, decreaseItemQty }) {
    const { id, name, quantity, price, imageUrl } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='cart item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItemQty(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(id)}>&#10005;</div>            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    addItem: item => dispatch(addItem(item)),
    decreaseItemQty: item => dispatch(decreaseItemQty(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
