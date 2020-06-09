import React, { lazy, Suspense } from 'react';
import './collections-overview.styles.scss';

import Spinner from '../spinner/spinner.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../selectors/shop/shop.selector';

const PreviewCollections = lazy(() => import('../preview-collections/preview-collections.component'));

function CollectionsOverview({ collections }) {
  const shops = collections.map(({ id, ...otherCollectionsProps }) => (
    <Suspense fallback={<Spinner />}>
      <PreviewCollections key={id} {...otherCollectionsProps} />
    </Suspense>
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