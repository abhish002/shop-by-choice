import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../selectors/directory/directory.selector';

function Directory({ sections }) {
  const menuItems = sections.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ));

  return (
    <div className='directory-menu'>
      {menuItems}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);