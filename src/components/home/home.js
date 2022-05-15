import React from 'react';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import June from './june';
import August from './august';
import September from './september';
import October from './october';
import Map from './map';

export default function Home() {
    return (
        <div>
            <p>Homepage</p>
            <img src={cabinsIcon} alt="Row of various cabin styles"/>
            <June />
            <August />
            <September />
            <October />
            <Map />
        </div>
    )
}