import React from 'react';
import ResultsLink from '../routeLinks/resultsLink';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import washingtonMap from '../../resources/washingtonMap.png';

export default function RegionChoice({ region, handleRegionChange }) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <h1 className="text-light text-center my-4 display-1 font-monospace">CABIN GENERATOR</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <img src={cabinsIcon} alt="Row of cabins in various styles" className="mb-5 mx-auto d-block" />
                </div>
            </div>
            <div className="row justify-content-center align-items-center my-5">
                <div className="col offset-2">
                    <img src={washingtonMap} alt="Map of Washington State" />
                </div>
                <div className="col">
                    <input 
                        type="radio" 
                        name="region-selection"
                        value="coast"
                        id="coast"
                        checked={region === "coast"}
                        onChange={handleRegionChange}
                    />
                    <label htmlFor="coast" className="text-light">Coast/Olympics</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="region-selection"
                        value="cascades"
                        id="cascades"
                        checked={region === "cascades"}
                        onChange={handleRegionChange}
                    />
                    <label htmlFor="cascades" className="text-light">Cascades</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="region-selection"
                        value="central"
                        id="central"
                        checked={region === "central"}
                        onChange={handleRegionChange}
                    />
                    <label htmlFor="central" className="text-light">Central Washington</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="region-selection"
                        value="east"
                        id="east"
                        checked={region === "east"}
                        onChange={handleRegionChange}
                    />
                    <label htmlFor="east" className="text-light">Eastside</label>
                    </div>
                </div>
            <div className="row mb-5">
                <div className="col">
                    {region && <ResultsLink />}
                </div>
            </div>
        </div>
    )
}