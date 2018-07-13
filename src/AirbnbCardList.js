/* eslint-disable */

import React from 'react';
import AirbnbCard from './AirbnbCard';
import PropTypes from 'prop-types';
import AirbnbCardLayout from './AirbnbCardLayout';

const AirbnbCardList = (props) => {
    const cards = props.imageUrls.map((url) => <AirbnbCard imageSrc={url} key={url} />)
    return (
    <AirbnbCardLayout>
        {cards}
    </AirbnbCardLayout>
);
};

AirbnbCardList.propTypes = {
    imageUrls: PropTypes.array.isRequired
};

export default AirbnbCardList;