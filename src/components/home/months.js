import React from 'react';
import calendar from '../../resources/calendar.png';

export default function Months({weekend, handleWeekendChange}) {
    handleWeekendChange = (event) => {
        weekend += event.target.value;
    }
    return (
        <div>
            <p>Months</p>
            <form>
                <div>
                    <img src={calendar} alt="June calendar" />
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="june17"
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            June 17-19
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="june24" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            June 24-26
                        </label>
                    </div>
                </div>
                <div>
                    <img src={calendar} alt="August calendar" />
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="aug19"
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            August 19-21
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="aug26" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            August 26-28
                        </label>
                    </div>
                </div>
                <div>
                    <img src={calendar} alt="September calendar" />
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="sept2"
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            September 2-4
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="sept9" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            September 9-11
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="sept16"
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            September 16-18
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="sept23" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            September 23-25
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="sept30" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            Sept 30 - Oct 2
                        </label>
                    </div>
                </div>
                <div>
                    <img src={calendar} alt="October calendar" />
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="oct7"
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            October 7-9
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="oct14" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            October 14-16
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="oct21" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            October 21-23
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="date-selection"
                                value="oct28" 
                                checked={weekend}
                                onChange={handleWeekendChange}
                            />
                            October 28-30
                        </label>
                    </div>
                </div>       
            </form>
        </div>
    )
}