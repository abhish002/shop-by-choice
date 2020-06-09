import React, { Component, lazy, Suspense } from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStartAsync } from '../../actions/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionContainer = lazy(() => import('../../pages/collection/collection.container'));

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {    
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route path={`${match.path}/:collectionId`}
            component={CollectionContainer}
          />
        </Suspense>
      </div>
    )
  }
};

const mapDispatchToprops = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToprops)(Shop);




