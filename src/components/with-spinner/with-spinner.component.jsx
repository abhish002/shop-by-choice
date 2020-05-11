import React from 'react';
import './with-spinner.styles.scss';

import loadingImage from '../../assets/loader.gif';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='loader'>
      <img className='loader__loading-image' src={loadingImage} alt='loading..' />
    </div>
  ) : (<WrappedComponent {...otherProps} />)
};

export default WithSpinner;
