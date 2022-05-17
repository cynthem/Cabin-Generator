import React from 'react';
import ResultsLink from '../routeLinks/resultsLink';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import washingtonMap from '../../resources/washingtonMap.png';

export default function RegionChoice({ region, handleRegionChange }) {
    return (
        <div>
            <p>Region choice page</p>
            <img src={cabinsIcon} alt="Row of various cabin styles" />
            <div>
                <img src={washingtonMap} alt="Map of Washington State" />
                <input 
                    type="radio" 
                    name="region-selection"
                    value="coast"
                    id="coast"
                    checked={region === "coast"}
                    onChange={handleRegionChange}
                />
                <label htmlFor="coast">Coast/Olympics</label>
                <br/>
                <input 
                    type="radio" 
                    name="region-selection"
                    value="cascades"
                    id="cascades"
                    checked={region === "cascades"}
                    onChange={handleRegionChange}
                />
                <label htmlFor="cascades">Cascades</label>
                <br/>
                <input 
                    type="radio" 
                    name="region-selection"
                    value="central"
                    id="central"
                    checked={region === "central"}
                    onChange={handleRegionChange}
                />
                <label htmlFor="central">Central Washington</label>
                <br/>
                <input 
                    type="radio" 
                    name="region-selection"
                    value="east"
                    id="east"
                    checked={region === "east"}
                    onChange={handleRegionChange}
                />
                <label htmlFor="east">Eastside</label>
            </div>
            <div>
                {region && <ResultsLink />}
            </div>
        </div>
    )
}