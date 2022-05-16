import React from 'react';
import washingtonMap from '../../resources/washingtonMap.png';

export default function Map() {
    return (
        <div>
            <p>Map</p>
            <img src={washingtonMap} alt="Map of Washington State" />
            <div>
                <input type="radio" id="coast" />
                <label for="coast">Coast/Olympics</label>
                <br/>
                <input type="radio" id="cascades" />
                <label for="cascades">Cascades</label>
                <br/>
                <input type="radio" id="central" />
                <label for="central">Central Washington</label>
                <br/>
                <input type="radio" id="east" />
                <label for="east">Eastside</label>
                <br/>
            </div>
        </div>
    )
}