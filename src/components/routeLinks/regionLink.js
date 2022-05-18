import React from 'react';
import { Link } from 'react-router-dom';

export default function RegionLink() {
    return (
        <Link to="/regions">
            <button type="button" className="btn btn-light btn-block active" aria-pressed="true">
                Click to continue
            </button>
        </Link>
    )
}