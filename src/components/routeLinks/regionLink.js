import React from 'react';
import { Link } from 'react-router-dom';

export default function RegionLink() {
    return (
        <div className="row">
            <div className="col">
                <Link to="/regions">
                    <button type="button" className="btn btn-light btn-large btn-block">Click to continue</button>
                </Link>
            </div>
        </div>
    )
}