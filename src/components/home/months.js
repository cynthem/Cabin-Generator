import React from 'react';
import calendar from '../../resources/calendar.png';

export default function Months() {
    return (
        <div>
            <p>Months</p>
            <div>
                <img src={calendar} alt="June calendar" />
                <div>
                    <input type="radio" id="june17" />
                    <label for="june17">June 17-19</label>
                    <br/>
                    <input type="radio" id="june24" />
                    <label for="june24">June 24-26</label>
                </div>
            </div>
            <div>
                <img src={calendar} alt="August calendar" />
                <div>
                    <input type="radio" id="aug19" />
                    <label for="aug19">August 19-21</label>
                    <br/>
                    <input type="radio" id="aug26" />
                    <label for="aug26">August 26-28</label>
                </div>
            </div>
            <div>
                <img src={calendar} alt="September calendar" />
                <div>
                    <input type="radio" id="sept2" />
                    <label for="sept2">September 2-4</label>
                    <br/>
                    <input type="radio" id="sept9" />
                    <label for="sept9">September 9-11</label>
                    <br/>
                    <input type="radio" id="sept16" />
                    <label for="sept16">September 16-18</label>
                    <br/>
                    <input type="radio" id="sept23" />
                    <label for="sept23">September 23-25</label>
                    <br/>
                    <input type="radio" id="sept30" />
                    <label for="sept30">Sept 30 - Oct 2</label>
                </div>
            </div>
            <div>
                <img src={calendar} alt="October calendar" />
                <div>
                    <input type="radio" id="oct7" />
                    <label for="oct7">October 7-9</label>
                    <br/>
                    <input type="radio" id="oct14" />
                    <label for="oct14">October 14-16</label>
                    <br/>
                    <input type="radio" id="oct21" />
                    <label for="oct21">October 21-23</label>
                    <br/>
                    <input type="radio" id="oct28" />
                    <label for="oct28">October 28-30</label>
                </div>
            </div>
     
        </div>
    )
}