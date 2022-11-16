import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Day = ({dayData, setActiveDay, activeDay}) => {



    const { id } = useParams();
    const dateString = dayData.date.substring(0,10);
    const queryKey = id + '-' + dateString;
    
    const { data, status } = useQuery({
        queryKey: [queryKey], 
        queryFn: () => getDayData(),
        refetchOnWindowFocus: false,
    });
    const [isActive, setIsActive]= useState(false);

    const getDayData = async () => {
        // console.log(dateString);
        const route = 'http://127.0.0.1/api/day/'+ id +'/'+ dateString ;
        const response = await fetch(route);
        return response.json();
    }

    const pickDate = (day) => {
        setActiveDay(day);
    }




    useEffect(() => {
        if (typeof activeDay !== 'undefined' && activeDay.date == dayData.date) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    },[activeDay]);

    useEffect(() => {
        if (typeof activeDay === 'undefined' && typeof data !== 'undefined' && dayData.today) {
            // console.log('pick');
            setActiveDay(data.dayInfo);
        }
    },[status]);


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
                <>
                    <div className="players-left-to-vote" data-bs-toggle="tooltip" data-bs-title="{{day.playersLeftToVote}} more to vote"><i className="fa-sharp fa-solid fa-arrows-rotate">{data.dayInfo.remainingVoters}</i></div> 
                    
                    {!data.dayInfo.playerStatus ? (
                        <div className="players-vote-status" data-bs-toggle="tooltip" data-bs-title="{{day.playersLeftToVote}} more to vote"><i className="fa-sharp fa-solid fa-exclamation"></i></div> 
                    ) : ''}


                </>

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


