import React from 'react';
import './collections-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../selectors/shop/shop.selector';

import PreviewCollections from '../preview-collections/preview-collections.component';

function CollectionsOverview({ collections }) {
  const shops = collections.map(({ id, ...otherCollectionsProps }) => (
    <PreviewCollections key={id} {...otherCollectionsProps} />
  ));
  return (
    <div className='collections-overview'>
      {shops}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);