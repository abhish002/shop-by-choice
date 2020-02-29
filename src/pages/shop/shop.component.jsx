import React, { Component } from 'react';
import './shop.styles.scss';
import PreviewCollections from '../../components/preview-collections/preview-collections.component';
import SHOP_DATA from './shop.data';

export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    const shops = collections.map(({ id, ...otherCollectionsProps }) => (
      <PreviewCollections key={id} {...otherCollectionsProps} />
    ));
    return (
      <div className='shop-page'>
        {shops}
      </div>
    )
  }
}

