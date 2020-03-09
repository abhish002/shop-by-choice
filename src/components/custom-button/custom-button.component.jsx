import React from 'react';
import './custom-button.styles.scss';

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  const customButtonClass = `${isGoogleSignIn ? 'google-sign-in' : ''}`;
  const invertedButtonClass = `${inverted ? 'inverted' : ''}`;

  return (
    <div className='custom-button'>
      <button className={`${invertedButtonClass} ${customButtonClass} custom-button`} {...otherProps}>{children}</button>
    </div>
  )
}

export default CustomButton;