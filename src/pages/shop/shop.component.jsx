import React, { Component } from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../actions/shop/shop.actions';
import { selectIsCollectionFetching } from '../../selectors/shop/shop.selector';

// create components with spinner
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={
            (props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          }
        />
        <Route path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          }
        />
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToprops = dispatch => ({  
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToprops)(Shop);




