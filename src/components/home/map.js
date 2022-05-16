import React from 'react';
import washingtonMap from '../../resources/washingtonMap.png';

export default function Map() {
    return (
        <div>
            <p>Map</p>
            <img src={washingtonMap} alt="Map of Washington State" />
            <div>
            </div>
        </div>
    )
}