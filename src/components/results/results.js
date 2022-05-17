import React from 'react';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import useScript from '../../hooks/useScript';

const styling = {
    width: '450px', 
    height: '300px', 
    margin: 'auto'
};

export default function Results({ weekend, region }) {
    useScript('https://www.airbnb.com/embeddable/airbnb_jssdk');

    const imagesSelector = (weekend, region) => {
        if (region === "coast") {
            if (weekend === "june17") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46529006" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sasquatch Shore House - Oyhut Bay Seaside Village</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                        </div>
                    </div>
                )
            } else if (weekend === "june24") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                        </div>
                    </div>
                )
            } else if (weekend === "aug19") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="33074762" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-friendly home with private hot tub &amp;amp; fireplace - only steps to the beach</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="592761305422584068" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/592761305422584068?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/592761305422584068?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach bungalow with enclosed yard, deck, grill, private washer/dryer, &amp;amp; WiFi</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                        </div>
                    </div>
                )
            } else if (weekend === "aug26") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="46529006" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sasquatch Shore House - Oyhut Bay Seaside Village</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="33074762" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-friendly home with private hot tub &amp;amp; fireplace - only steps to the beach</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                        </div>
                    </div>
                )
            } else if (weekend === "sept2") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="39177068" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">❖The Nest❖ Secluded Port Townsend  Tree House</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="572543781365266179" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/572543781365266179?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/572543781365266179?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">New-build townhome with fenced yard, hot tub, patio, w/d, &amp;amp; fast wifi - dogs ok</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46529006" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sasquatch Shore House - Oyhut Bay Seaside Village</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                        </div>
                    </div>
                )
            } else if (weekend === "sept9") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="39177068" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">❖The Nest❖ Secluded Port Townsend  Tree House</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="10265082" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/10265082?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/10265082?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Sea Home, Hot Tub, 3 Bedrooms, 2.25 Baths</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46554709" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mountain Chalet Stay 🏔 3BR/2BA Wood Fire Hot Tub</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                        </div>
                    </div>
                )
            } else if (weekend === "sept16") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46554709" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mountain Chalet Stay 🏔 3BR/2BA Wood Fire Hot Tub</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                        </div>
                    </div>
                )
            } else if (weekend === "sept23") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="16390428" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach Gem- Beach Front Hot Tub</a>
                        </div>
                    </div>
                )
            } else if (weekend === "sept30") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="11700330" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/11700330?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/11700330?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Amazing Grace 4 Bed Beach House</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="16390428" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach Gem- Beach Front Hot Tub</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                        </div>
                    </div>
                )
            } else if (weekend === "oct7") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="16390428" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach Gem- Beach Front Hot Tub</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                    </div>
                )
            } else if (weekend === "oct14") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                        </div>
                    </div>
                )
            } else if (weekend === "oct21") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                    </div>
                )
            } else if (weekend === "oct28") {
                return (
                    <div>
                        <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                        </div>
                        <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                            <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h1>Oops, something went wrong...</h1>
                        <p>Date and region selection required. Click below to start over.</p>
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