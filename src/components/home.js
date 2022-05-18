import React from 'react';
import WeekendLink from './routeLinks/weekendLink';
import cabinsIcon from '../resources/cabinsIcon.jpg';

export default function Home() {
    return (
        <>
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
            </div>
            <div className="container">
                <div className="row">
                    <div className="col offset-1">
                        <h2 className="text-light">A search for cabins on airbnb made simple!</h2>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col offset-1">
                        <h5 className="text-light">Select a date, then a region, and generate 4 of the best cabin results.</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-1">
                        <p className="text-light">Results are filtered by the following:</p>
                    </div>
                </div>
                <ul className="list-group mb-5">
                    <li className="list-group-item col-3 offset-1">Up to 6 people</li>
                    <li className="list-group-item col-3 offset-1">Pet friendly</li>
                    <li className="list-group-item col-3 offset-1">3+ bedrooms</li>
                    <li className="list-group-item col-3 offset-1">Private hot tub</li>
                    <li className="list-group-item col-3 offset-1">Full kitchen</li>
                    <li className="list-group-item col-3 offset-1">Affordable</li>
                </ul>
                <div className="row mb-5">
                    <div className="col offset-1">
                        <p>(Some exceptions may apply!)</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col offset-5">
                        <WeekendLink />
                    </div>
                </div>
            </div>
        </>
    )
}