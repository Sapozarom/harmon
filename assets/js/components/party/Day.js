import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Day = ({dayData, setActiveDay, setActiveDate, activeDay, activeDateStatus}) => {

    // const [status, setStatus] = useState(dayData.status);
    const [isActive, setIsActive]= useState(false);
    

    const dateString = dayData.date.substring(0,10);
    const { data, status } = useQuery([dateString], () => getDayData());

    // console.log(data);

    const getDayData = async () => {
        
        const route = 'http://127.0.0.1/api/day/2/'+ dateString ;
        const response = await fetch(route);
        return response.json();
    }

    const pickDate = (day) => {
        setActiveDay(day);
    }


    // useEffect(() => {
    //     if (isActive) {
    //         setStatus(activeDateStatus);
    //     }
    // },[activeDateStatus]);

    useEffect(() => {
        if (typeof activeDay !== 'undefined' && activeDay.date == dayData.date) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    },[activeDay]);

    // useEffect(() => {

    //         setStatus(dayData.status);
        
    // },[dayData]);

        return (
        <>
        {status =='success' ? (
          //success 
          <td 
          className={isActive ? data.dayInfo.status + " p-0  picked-date" :  data.dayInfo.status + " p-0" }
          onClick={() => pickDate(data.dayInfo)}>

              <div className="calendar-day" >     
                  {data.dayInfo.number}
              </div>

              {/* ADD TOOLTIP!!!!!!!!! */}
              
              {data.dayInfo.status == "CANCELED" ? (
                      <div className="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="Some members are unavailable"><i className="fa-solid fa-xmark "></i></div> 
                  ) : (
              ''
              )}

              {/* ADD TOOLTIP!!!!!!!!! */}
              {data.dayInfo.status == "VOTED" ? (
                  <div className="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="{{day.playersLeftToVote}} more to vote"><i className="fa-sharp fa-solid fa-arrows-rotate"></i><b>{dayData.playersLeftToVote}</b></div> 
                  ) : (
              ''
              )}

              {data.dayInfo.status == "MISSED" ? (
                  // <i class="fa-solid fa-ban"></i>
                       <div className="players-left-to-vote"><i className="fa-solid fa-ban" data-bs-toggle="tooltip" data-bs-title="Missed schedules"></i></div>
                       ) : (
              ''
              )}

              {data.dayInfo.status == "GAMEDAY" ? (

                       <div className="players-left-to-vote"><i className="fa-solid fa-check " data-bs-toggle="tooltip" data-bs-title="Missed schedules"></i></div>
                       ) : (
              ''
              )}
          </td>
        ) : (
            <td>              
                <div className="calendar-day" >     
                    {dayData.number}
                </div>
            </td>
        )}
           
        </>
        )
    }

export default Day


