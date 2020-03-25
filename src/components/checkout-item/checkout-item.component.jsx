import React from 'react';
import './checkout-item.styles.scss';

export default function CheckoutItem({ cartItem: { name, quantity, price, imageUrl } }) {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='cart item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}
