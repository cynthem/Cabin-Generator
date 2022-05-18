import React from 'react';
import WeekendLink from '../routeLinks/weekendLink';
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
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34177751" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34177751?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34177751?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Kid/dog friendly,hot tub,main floor master</a>
                                </div>
                            </div> 
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46529006" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sasquatch Shore House - Oyhut Bay Seaside Village</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "june24") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53515463" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53515463?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53515463?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beautiful &amp;amp; dog-friendly beachfront home w/private hot tub, firepit, &amp;amp; free WiFi</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53735500" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53735500?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53735500?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Modern Ocean Shores Home: Fire Pit &amp;amp; Hot Tub!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33704148" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33704148?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33704148?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Moclips Beach House - ocean front &amp;amp; newly updated</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug19") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33074762" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-friendly home with private hot tub &amp;amp; fireplace - only steps to the beach</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="592761305422584068" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/592761305422584068?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/592761305422584068?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach bungalow with enclosed yard, deck, grill, private washer/dryer, &amp;amp; WiFi</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug26") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46529006" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sasquatch Shore House - Oyhut Bay Seaside Village</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33074762" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33074762?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-friendly home with private hot tub &amp;amp; fireplace - only steps to the beach</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="506667266175518134" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/506667266175518134?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Happy Heron&amp;#x27;s Hideaway- dog friendly</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept2") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39177068" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">❖The Nest❖ Secluded Port Townsend  Tree House</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="572543781365266179" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/572543781365266179?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/572543781365266179?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">New-build townhome with fenced yard, hot tub, patio, w/d, &amp;amp; fast wifi - dogs ok</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46529006" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46529006?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sasquatch Shore House - Oyhut Bay Seaside Village</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53658964" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53658964?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Oceans3 Getaway - Entire Residential Home with Newly-Installed Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept9") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39177068" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39177068?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">❖The Nest❖ Secluded Port Townsend  Tree House</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="10265082" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/10265082?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/10265082?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Sea Home, Hot Tub, 3 Bedrooms, 2.25 Baths</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46554709" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mountain Chalet Stay 🏔 3BR/2BA Wood Fire Hot Tub</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept16") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46554709" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46554709?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mountain Chalet Stay 🏔 3BR/2BA Wood Fire Hot Tub</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept23") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                            <   div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16390428" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach Gem- Beach Front Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            } else if (weekend === "sept30") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="11700330" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/11700330?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/11700330?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Amazing Grace 4 Bed Beach House</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16390428" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach Gem- Beach Front Hot Tub</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct7") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16390428" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16390428?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beach Gem- Beach Front Hot Tub</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct14") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="11714052" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/11714052?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Damon Point - 4 Bedroom Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct21") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct28") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38512985" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38512985?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Blue Pearl Vacation Home, Sunset Beach, Moclips WA</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="33291483" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/33291483?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lone Pine Beach House at South Bay-Westport WA</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="46126258" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/46126258?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Vintage-inspired cottage in Seabrook, sleeps 7</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="19347082" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/19347082?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">River House on the Elwha River &amp;amp; the Olympic Park</a>
                                </div>
                            </div>
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
        } else if (region === "cascades") {
            if (weekend === "june17") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="40270026" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/40270026?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/40270026?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Money Creek Chalet- stunning, bright &amp;amp; spacious w/ hot tub for 8 +pets</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39864044" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cottage at Sundara West-Heated Pool open all year</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="17666254" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Seven Gables Cabin, Stevens Pass, Hiking,Pets,View</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="47237594" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/47237594?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/47237594?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Modern Luxury Mt. Baker Chalet With Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "june24") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45531775" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45531775?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45531775?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Elk Crossing Cozy Cabin at Crystal Mountain</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="53345761" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/53345761?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/53345761?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mt. Rainier’s Newest Family Cabin</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="17666254" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Seven Gables Cabin, Stevens Pass, Hiking,Pets,View</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="47237594" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/47237594?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/47237594?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Modern Luxury Mt. Baker Chalet With Hot Tub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug19") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="17666254" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Seven Gables Cabin, Stevens Pass, Hiking,Pets,View</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="42296292" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/42296292?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/42296292?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mysty Mountain Cabin on River 15Mi to Stevens Pass</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="559470921413879130" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/559470921413879130?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/559470921413879130?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy A-Frame w/ Hot Tub, Fire Pit, &amp;amp; Fireplace!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51361556" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Quaint Lake Cushman Cottage w/ Private Access</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug26") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39864044" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cottage at Sundara West-Heated Pool open all year</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="42296292" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/42296292?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/42296292?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mysty Mountain Cabin on River 15Mi to Stevens Pass</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51361556" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Quaint Lake Cushman Cottage w/ Private Access</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43476421" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43476421?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43476421?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Three Enchanting Riverfront Cabins: Hot Tub Access</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept2") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="588055523379552489" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/588055523379552489?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/588055523379552489?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Chester&amp;#x27;s Cabin - Cozy rustic cabin w/ year-round hot tub &amp;amp; A/C. Pet-Friendly!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="559470921413879130" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/559470921413879130?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/559470921413879130?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy A-Frame w/ Hot Tub, Fire Pit, &amp;amp; Fireplace!</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51361556" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Quaint Lake Cushman Cottage w/ Private Access</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="42296292" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/42296292?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/42296292?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Mysty Mountain Cabin on River 15Mi to Stevens Pass</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept9") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="28352702" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/28352702?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/28352702?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Roslyn Ridge Cabin get-a-way</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="12914170" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/12914170?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/12914170?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Elder Family Lodge | Hot tub, Wifi, BBQ, Firepit!</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43476421" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43476421?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43476421?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Three Enchanting Riverfront Cabins: Hot Tub Access</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39864044" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cottage at Sundara West-Heated Pool open all year</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept16") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43317616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lakefront Cabin w/ Stunning Mountain Views &amp;amp; Dock!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="6716336" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/6716336?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/6716336?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Pine Lodge *12* 7+ addl $ Hot Tub WIFI AC EV chrg</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39864044" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cottage at Sundara West-Heated Pool open all year</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="40270026" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/40270026?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/40270026?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Money Creek Chalet- stunning, bright &amp;amp; spacious w/ hot tub for 8 +pets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept23") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="1920394" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-Friendly Cabin with Hot Tub, Fireplace, &amp;amp; WiFi</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="28352702" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/28352702?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/28352702?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Roslyn Ridge Cabin get-a-way</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="17666254" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Seven Gables Cabin, Stevens Pass, Hiking,Pets,View</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51973954" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51973954?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51973954?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Autumn Acres on Coast where Adventure Awaits</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept30") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="47867466" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/47867466?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/47867466?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy Packwood Cabin w/ Private Lot &amp;amp; Swim Spa!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51973954" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51973954?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51973954?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Autumn Acres on Coast where Adventure Awaits</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39864044" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cottage at Sundara West-Heated Pool open all year</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="559470921413879130" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/559470921413879130?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/559470921413879130?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy A-Frame w/ Hot Tub, Fire Pit, &amp;amp; Fireplace!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct7") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39864044" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39864044?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cottage at Sundara West-Heated Pool open all year</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51361556" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Quaint Lake Cushman Cottage w/ Private Access</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="1920394" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-Friendly Cabin with Hot Tub, Fireplace, &amp;amp; WiFi</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51973954" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51973954?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51973954?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Autumn Acres on Coast where Adventure Awaits</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct14") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="6073000" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/6073000?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/6073000?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy Forest House, Hot Tub/Sauna, AC, near Creek.</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43317616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lakefront Cabin w/ Stunning Mountain Views &amp;amp; Dock!</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="1920394" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-Friendly Cabin with Hot Tub, Fireplace, &amp;amp; WiFi</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="17666254" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/17666254?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Seven Gables Cabin, Stevens Pass, Hiking,Pets,View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct21") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="31440656" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/31440656?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/31440656?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Beachfront Cabin - 2BR w/ Loft (stunning sunsets!)</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="6073000" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/6073000?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/6073000?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy Forest House, Hot Tub/Sauna, AC, near Creek.</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="1920394" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/1920394?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog-Friendly Cabin with Hot Tub, Fireplace, &amp;amp; WiFi</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43317616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lakefront Cabin w/ Stunning Mountain Views &amp;amp; Dock!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct28") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="28352702" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/28352702?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/28352702?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Roslyn Ridge Cabin get-a-way</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51361556" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51361556?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Quaint Lake Cushman Cottage w/ Private Access</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43317616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43317616?check_in=2022-10-14&amp;amp;check_out=2022-10-16&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lakefront Cabin w/ Stunning Mountain Views &amp;amp; Dock!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43476421" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43476421?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43476421?guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Three Enchanting Riverfront Cabins: Hot Tub Access</a>
                                </div>
                            </div>
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
        } else if (region === "central") {
            if (weekend === "june17") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="54131855" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/54131855?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/54131855?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Warm, Upscale Cabin w/ Hot Tub: 14 Mi to Ski!</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38355905" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38355905?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38355905?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cozy Woodland Cottage w/ Two Decks and Private Hot Tub - Dogs OK!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="37327414" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/37327414?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/37327414?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Camas Creek Retreat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "june24") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="54131855" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/54131855?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/54131855?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">NEW! Warm, Upscale Cabin w/ Hot Tub: 14 Mi to Ski!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="17607859" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/17607859?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/17607859?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Black Forest Lodge:Brand New Hot Tub &amp;amp; Beds/Linens</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="37327414" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/37327414?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/37327414?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Camas Creek Retreat</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="23519656" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/23519656?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/23519656?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Ridge View Manor - Elegant Home in Great Location!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug19") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="23645284" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/23645284?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/23645284?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Meadow Wood Lodge-Fenced Acreage, Fido OK, Hot Tub, WIFI, and more</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34809127" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Woodland Chalet in a Wonderful Quiet Setting</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39271589" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39271589?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39271589?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Quiet Orchard Home w/Private Hot Tub &amp;amp; Great Location near Wenatchee - Dogs OK!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="21343839" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/21343839?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/21343839?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Cashmere Cabin Getaway</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug26") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="35340142" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/35340142?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/35340142?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Rose All Day and Wine Not at Lake Chelan Lookout Vacation Rentals</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34809127" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Woodland Chalet in a Wonderful Quiet Setting</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="39271589" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/39271589?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/39271589?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Quiet Orchard Home w/Private Hot Tub &amp;amp; Great Location near Wenatchee - Dogs OK!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51867138" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51867138?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51867138?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Pour house at The Lookout at Lake Chelan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept2") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="35340115" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/35340115?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/35340115?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Life at The Lookout at Lake Chelan</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34809127" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Woodland Chalet in a Wonderful Quiet Setting</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45161574" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45161574?check_in=2022-09-02&amp;amp;check_out=2022-09-04&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45161574?check_in=2022-09-02&amp;amp;check_out=2022-09-04&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Unobstructed View. Pets. Hot Tub. Town Close by.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept9") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="52262414" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/52262414?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/52262414?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Red Door Retreat with Your Own Pool &amp;amp; Hot Tub</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="35340115" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/35340115?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/35340115?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Life at The Lookout at Lake Chelan</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="35340158" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/35340158?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/35340158?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Where the Wild Things Are at The Lookout at Lake Chelan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept16") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="8608616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Wenatchee cabin, close to Leavenworth</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="35340142" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/35340142?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/35340142?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Rose All Day and Wine Not at Lake Chelan Lookout Vacation Rentals</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="51867138" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/51867138?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/51867138?check_in=2022-10-21&amp;amp;check_out=2022-10-23&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Pour house at The Lookout at Lake Chelan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept23") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="35340158" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/35340158?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/35340158?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Where the Wild Things Are at The Lookout at Lake Chelan</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="1992294" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/1992294?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/1992294?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Log home, walk to town! - Sleeps 6 - Hot Tub</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43791074" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43791074?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43791074?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Natural Log &amp;amp; Rock Lodge on the Chiwawa River</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept30") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="23021067" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/23021067?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/23021067?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Elk Ridge Chalet-Pet Friendly Chalet in Roslyn Ridge! Summer Pool | Fire Pit | WiFi</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="52262414" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/52262414?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/52262414?check_in=2022-09-09&amp;amp;check_out=2022-09-11&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Red Door Retreat with Your Own Pool &amp;amp; Hot Tub</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34809127" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Woodland Chalet in a Wonderful Quiet Setting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct7") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="18564285" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Riverfront Refuge | Private Leavenworth Log Cabin</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="8608616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Wenatchee cabin, close to Leavenworth</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34809127" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Woodland Chalet in a Wonderful Quiet Setting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct14") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="18564285" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Riverfront Refuge | Private Leavenworth Log Cabin</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="8608616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Wenatchee cabin, close to Leavenworth</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43791074" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43791074?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43791074?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Natural Log &amp;amp; Rock Lodge on the Chiwawa River</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct21") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="8608616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Wenatchee cabin, close to Leavenworth</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45369838" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45369838?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Dog friendly cabin close to Leavenworth- sleeps 6</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="18564285" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Riverfront Refuge | Private Leavenworth Log Cabin</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43791074" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43791074?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43791074?check_in=2022-09-23&amp;amp;check_out=2022-09-25&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Natural Log &amp;amp; Rock Lodge on the Chiwawa River</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct28") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="775408" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/775408?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/775408?check_in=2022-10-28&amp;amp;check_out=2022-10-30&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Downtown 3 Bedroom Townhouse w/ patio and hot tub</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="34809127" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/34809127?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Woodland Chalet in a Wonderful Quiet Setting</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="8608616" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/8608616?check_in=2022-09-16&amp;amp;check_out=2022-09-18&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Lake Wenatchee cabin, close to Leavenworth</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="18564285" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/18564285?check_in=2022-10-07&amp;amp;check_out=2022-10-09&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Riverfront Refuge | Private Leavenworth Log Cabin</a>
                                </div>
                            </div>
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
        } else if (region === "east") {
            if (weekend === "june17") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="24733853" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/24733853?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/24733853?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">49 Degrees North Ski Chalet</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="54035420" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/54035420?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/54035420?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">HUGE modern house — hot tub, views, fully stocked</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="49585763" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/49585763?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/49585763?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Guest House Apt &amp;lt; Half-Mile to Jumpoff Joe Lake!</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="43742926" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/43742926?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/43742926?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Last Minite Special | Spacious Modern Farmhouse + En Suite Bedroom. 15 Min To Downtown. Pet Friendly. 💚 Clean. Great Location!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "june24") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="49171752" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/49171752?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/49171752?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Desert Retreat at the Gorge Amphitheatre &amp;amp; Cave B</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="24733853" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/24733853?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/24733853?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">49 Degrees North Ski Chalet</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="608621771562879149" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/608621771562879149?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/608621771562879149?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Boho Charmer 0.3 miles from WWU</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="25355413" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/25355413?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/25355413?check_in=2022-06-24&amp;amp;check_out=2022-06-26&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Your Great Escape</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug19") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45713390" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sodo Landing, Craftsman home, walk to downtown</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "aug26") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="583414918878176090" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sip-N-Stay on Sturm-Enjoy the hot tub dog friendly</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="24082083" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/24082083?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/24082083?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Maple Place - Ideal Vacation Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept2") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="583414918878176090" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sip-N-Stay on Sturm-Enjoy the hot tub dog friendly</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept9") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="12983536" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/12983536?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/12983536?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Bryant Barn</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="583414918878176090" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sip-N-Stay on Sturm-Enjoy the hot tub dog friendly</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept16") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="12983536" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/12983536?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/12983536?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Bryant Barn</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="24082083" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/24082083?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/24082083?check_in=2022-06-17&amp;amp;check_out=2022-06-19&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Maple Place - Ideal Vacation Home</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="54035420" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/54035420?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/54035420?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">HUGE modern house — hot tub, views, fully stocked</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept23") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45713390" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sodo Landing, Craftsman home, walk to downtown</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "sept30") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="12983536" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/12983536?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/12983536?check_in=2022-09-30&amp;amp;check_out=2022-10-02&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Bryant Barn</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="583414918878176090" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sip-N-Stay on Sturm-Enjoy the hot tub dog friendly</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct7") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="583414918878176090" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/583414918878176090?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sip-N-Stay on Sturm-Enjoy the hot tub dog friendly</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="54035420" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/54035420?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/54035420?check_in=2022-06-10&amp;amp;check_out=2022-06-12&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">HUGE modern house — hot tub, views, fully stocked</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct14") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45713390" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sodo Landing, Craftsman home, walk to downtown</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct21") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45713390" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sodo Landing, Craftsman home, walk to downtown</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (weekend === "oct28") {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="16191122" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/16191122?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">The Schoolhouse</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="38623848" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/38623848?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Spagnuolo...Light, bright, quiet and comfortable</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="45713390" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/45713390?check_in=2022-08-19&amp;amp;check_out=2022-08-21&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Sodo Landing, Craftsman home, walk to downtown</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="airbnb-embed-frame" data-id="594192762336945681" data-view="home" style={styling}>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget">View On Airbnb</a>
                                    <a href="https://www.airbnb.com/rooms/594192762336945681?check_in=2022-08-05&amp;amp;check_out=2022-08-07&amp;amp;guests=1&amp;amp;adults=6&amp;amp;pets=1&amp;amp;s=66&amp;amp;source=embed_widget" rel="nofollow">Brand New Property! Fieldview, close to S Wineries</a>
                                </div>
                            </div>
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
        } else {
            return (
                <div>
                    <h1>Oops, something went wrong...</h1>
                    <p>Date and region selection required. Click below to start over.</p>
                </div>
            )
        }
    }
    return (
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
            <div>
                {imagesSelector(weekend, region)}
            </div>
            <div className="row mb-5">
                <div className="col">
                    <WeekendLink />
                </div>
            </div>
        </div>
    )
}