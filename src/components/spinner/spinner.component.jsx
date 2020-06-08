import React from 'react'
import loadingImage from '../../assets/loader.gif';

export const Spinner = () => {
    return (
        <div className='loader'>
            <img className='loader__loading-image' src={loadingImage} alt='img' />
        </div>
    )
}

export default Spinner;
