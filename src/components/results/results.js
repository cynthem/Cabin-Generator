import React from 'react';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import coastJune17 from '../../resources/resultImages/coastImages/coastJune17.png';

export default function Results({ weekend, region }) {
    const imagesSelector = (weekend, region) => {
        if (weekend === "june17") {
            if (region === "coast") {
                return (
                    <img src={coastJune17} alt="Coast/Olympic June 17 result" />
                )
            }
        }
    }
    return (
        <div>
            <p>Results Page</p>
            <img src={cabinsIcon} alt="Row of various cabin styles"/>
            <div>
                {imagesSelector(weekend, region)}
            </div>
        </div>
    )
}