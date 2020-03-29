import React from 'react';
import './collection.styles.scss';

import { connect } from 'react-redux';

import { selectCollection } from '../../selectors/shop/shop.selector';

import Collectionitem from '../../components/collection-item/collection-item.component';

function CollectionPage({ collection }) {
  const { title, items } = collection;

  const collectionItems = items.map(item => (
    <Collectionitem key={item.id} item={item} />
  ))
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>{collectionItems}</div>
    </div>
  )
}

const mapStateToprops = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToprops)(CollectionPage);
