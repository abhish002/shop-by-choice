import React, { Component } from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateCollections } from '../../actions/shop/shop.actions';

// create components with spinner
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
  state = {
    isLoading: true,
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsref = firestore.collection('collections');
    const { updateCollections } = this.props;

    collectionsref.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });

    // collectionsref.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={
            (props) => <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props} />
          }
        />
        <Route path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props} />
          }
        />
      </div>
    )
  }
};

const mapDispatchToprops = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToprops)(Shop);




