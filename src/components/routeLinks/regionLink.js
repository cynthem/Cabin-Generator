import React from 'react';
import { Link } from 'react-router-dom';

export default function RegionLink() {
    return (
        <Link to="/regions">
            <div className="col">
                <button type="button" className="btn btn-light">
                    Click to continue
                </button>
            </div>
        </Link>
    )
}