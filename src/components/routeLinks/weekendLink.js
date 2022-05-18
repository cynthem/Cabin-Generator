import React from 'react';
import { Link } from 'react-router-dom';

export default function WeekendLink() {
    return (
        <Link to="/">
            <button type="button" className="btn btn-light btn-block active" aria-pressed="true">
                Click here to start over.
            </button>
        </Link>
    )
}