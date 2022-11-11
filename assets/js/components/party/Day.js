import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Day = ({dayData, setActiveDay, setActiveDate, activeDay, activeDateStatus}) => {

    const [status, setStatus] = useState(dayData.status);
    const [isActive, setIsActive]= useState(false);


    const pickDate = (day) => {
        setActiveDay(day);
    }

    const DisplayDayInfo = (dayData) => {
        return dayData.number;
    } 

    useEffect(() => {
        if (isActive) {
            setStatus(activeDateStatus);
        }
    },[activeDateStatus]);

    useEffect(() => {
        if (typeof activeDay !== 'undefined' && activeDay.date == dayData.date) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    },[activeDay]);

        return (
        <>
            <td 
            className={isActive ? status + " p-0  picked-date" :  status + " p-0" }
            onClick={() => pickDate(dayData)}>

                <div className="calendar-day" >     
                <b>{dayData.number}</b>
                {/* ADD TOOLTIP!!!!!!!!! */}
                {status == "VOTED" ? (
                    <div className="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="{{day.playersLeftToVote}} more to vote"><i class="fa-sharp fa-solid fa-arrows-rotate"></i><b>{dayData.playersLeftToVote}</b></div> 
                    ) : (
                ''
                )}



                </div>

                {/* ADD TOOLTIP!!!!!!!!! */}
                
                {status == "CANCELED" ? (
                        <div class="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="Some members are unavailable"><i class="fa-solid fa-xmark "></i></div> 
                    ) : (
                ''
                )}
            </td>
        </>
        )
    }

export default Day


