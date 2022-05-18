import React from 'react';
import { Link } from 'react-router-dom';

export default function ResultsLink() {
    return (
        <Link to="/results">
            <button type="button" className="btn btn-light btn-block active" aria-pressed="true">
                View your results!
            </button>
        </Link>
    )
}