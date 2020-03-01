import React from 'react';
import './custom-button.styles.scss';

export default function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  const customButtonClass = `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`;
  return (
    <div>
      <button className={customButtonClass} {...otherProps}>{children}</button>
    </div>
  )
}
