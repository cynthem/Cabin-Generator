import React from 'react';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import Months from './months';
import Map from './map';

export default function Home() {
    return (
        <div>
            <p>Homepage</p>
            <img src={cabinsIcon} alt="Row of various cabin styles"/>
            <Months />
            <Map />
        </div>
    )
}