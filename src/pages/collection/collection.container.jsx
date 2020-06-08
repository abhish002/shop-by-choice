import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../selectors/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import Collection from './collection.component'

export const mapStateToProps = createStructuredSelector({
    isLoading: () => !selectIsCollectionsLoaded
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Collection)

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionContainer;
