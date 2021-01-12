import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = () => (
    <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)()
})

export default connect(mapStateToProps)(CollectionPage);