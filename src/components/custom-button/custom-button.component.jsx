import React from 'react';
import './custom-button.styles.scss';

import { CustomButtonContainer, Button } from './custom-button.styles'
function CustomButton({ children, ...otherProps }) {
  // const customButtonClass = `${isGoogleSignIn ? 'google-sign-in' : ''}`;
  // const invertedButtonClass = `${inverted ? 'inverted' : ''}`;

  return (
    
      <Button {...otherProps}>
        {children}
      </Button>
    
  )
}

export default CustomButton;