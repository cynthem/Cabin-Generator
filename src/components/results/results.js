import React from 'react';
import cabinsIcon from '../../resources/cabinsIcon.jpg';

const styling = {
    width: '450px', 
    height: '300px', 
    margin: 'auto'
};

export default function Results({ weekend, region }) {
    const imagesSelector = (weekend, region) => {
        if (weekend === "june17") {
            if (region === "coast") {
                return (
                    <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                        <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                        <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                        <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
                    </div>
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