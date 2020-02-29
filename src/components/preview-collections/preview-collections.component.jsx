import React from 'react';

import './preview-collections.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollections = ({ title, routeName, items }) => {  
  const itemsList = items.filter((item, index) => index < 4)
    .map(({ id, ...otherItemProps }) => (
      <CollectionItem key={id} {...otherItemProps}/>
    ));
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {itemsList}
      </div>
    </div>
  )
};

export default PreviewCollections;
