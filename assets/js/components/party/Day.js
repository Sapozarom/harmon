import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Day = ({dayData, setActiveDay, setActiveDate, activeDay, activeDateStatus}) => {

    const [status, setStatus] = useState(dayData.status);
    const [isActive, setIsActive]= useState(false);


    const pickDate = (day) => {
        setActiveDay(day);
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

    useEffect(() => {

            setStatus(dayData.status);
        
    },[dayData]);

        return (
        <>
            <td 
            className={isActive ? status + " p-0  picked-date" :  status + " p-0" }
            onClick={() => pickDate(dayData)}>

                <div className="calendar-day" >     
                    {dayData.number}
                </div>

                {/* ADD TOOLTIP!!!!!!!!! */}
                
                {status == "CANCELED" ? (
                        <div className="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="Some members are unavailable"><i className="fa-solid fa-xmark "></i></div> 
                    ) : (
                ''
                )}

                {/* ADD TOOLTIP!!!!!!!!! */}
                {status == "VOTED" ? (
                    <div className="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="{{day.playersLeftToVote}} more to vote"><i className="fa-sharp fa-solid fa-arrows-rotate"></i><b>{dayData.playersLeftToVote}</b></div> 
                    ) : (
                ''
                )}

                {status == "MISSED" ? (
                    // <i class="fa-solid fa-ban"></i>
                         <div className="players-left-to-vote"><i className="fa-solid fa-ban" data-bs-toggle="tooltip" data-bs-title="Missed schedules"></i></div>
                         ) : (
                ''
                )}

                {status == "GAMEDAY" ? (

                         <div className="players-left-to-vote"><i className="fa-solid fa-check " data-bs-toggle="tooltip" data-bs-title="Missed schedules"></i></div>
                         ) : (
                ''
                )}
            </td>
        </>
        )
    }

export default Day


