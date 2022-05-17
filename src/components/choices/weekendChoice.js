import React from 'react';
import RegionLink from '../routeLinks/regionLink';
import cabinsIcon from '../../resources/cabinsIcon.jpg';
import calendar from '../../resources/calendar.png';

export default function WeekendChoice({ weekend, handleWeekendChange }) {   
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <h1>CABIN GENERATOR</h1>
                    <img src={cabinsIcon} alt="Row of cabins in various styles"/>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col">
                    <img src={calendar} alt="June calendar" />
                </div>
                <div className="col">
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="june17"
                        id="june17"
                        checked={weekend === "june17"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="june17">June 17-19</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="june24"
                        id="june24" 
                        checked={weekend === "june24"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="june24">June 24-26</label>
                </div>
                <div className="col">
                    <img src={calendar} alt="August calendar" />
                </div>
                <div className="col">
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="aug19"
                        id="aug19"
                        checked={weekend === "aug19"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="aug19">August 19-21</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="aug26" 
                        id="aug26"
                        checked={weekend === "aug26"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="aug26">August 26-28</label>
                </div>
            <div className="row align-items-center justify-content-center">    
                <div className="col">
                    <img src={calendar} alt="September calendar" />
                </div>
                <div className="col">
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="sept2"
                        id="sept2"
                        checked={weekend === "sept2"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="sept2">September 2-4</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="sept9" 
                        id="sept9"
                        checked={weekend === "sept9"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="sept9">September 9-11</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="sept16"
                        id="sept16"
                        checked={weekend === "sept16"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="sept16">September 16-18</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="sept23" 
                        id="sept23"
                        checked={weekend === "sept23"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="sept23">September 23-25</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="sept30"
                        id="sept30" 
                        checked={weekend === "sept30"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="sept30">Sept 30 - Oct 2</label>
                </div>
                <div className="col">
                    <img src={calendar} alt="October calendar" />
                </div>
                <div className="col">
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="oct7"
                        id="oct7"
                        checked={weekend === "oct7"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="oct7">October 7-9</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="oct14" 
                        id="oct14"
                        checked={weekend === "oct14"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="oct14">October 14-16</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="oct21" 
                        id="oct21"
                        checked={weekend === "oct21"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="oct21">October 21-23</label>
                    <br/>
                    <input 
                        type="radio" 
                        name="date-selection"
                        value="oct28" 
                        id="oct28"
                        checked={weekend === "oct28"}
                        onChange={handleWeekendChange}
                    />
                    <label htmlFor="oct28">October 28-30</label>
                </div>
            </div>    
            </div> 
            <div className="row">
                <div className="col">
                    {weekend && <RegionLink />}
                </div>
            </div>   
        </div> 
    )
}