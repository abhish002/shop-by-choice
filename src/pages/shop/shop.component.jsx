import React from 'react';
import './shop.styles.scss';
import PreviewCollections from '../../components/preview-collections/preview-collections.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../selectors/shop/shop.selector';

function Shop({ collections }) {
  const shops = collections.map(({ id, ...otherCollectionsProps }) => (
    <PreviewCollections key={id} {...otherCollectionsProps} />
  ));
  return (
    <div className='shop-page'>
      {shops}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);




