import React from 'react';
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
                    <div className="col">
                        <h2>A search for cabins on airbnb made simple!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Select a date, then a region, and generate the 4 best cabin results based on the following filters:</p>
                    </div>
                </div>
            </div>
        </>
    )
}