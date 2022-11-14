import React, { useState, useEffect } from 'react';
import Day from './Day';
const Week = ({weekData, activeDay, setActiveDay, activeDateStatus, setActiveDateStatus, setActiveDate, activeDate, }) => {


    const [week, setWeek] =  useState(weekData);
    const [dataLoaded, setDataLoaded] = useState(false);
    



    useEffect(() => {

        if (typeof weekData !== 'undefined') {
            setDataLoaded(true);
        }
    },[week]);
    
    // console.log(activeDay.date);
   
        return (
        <>

        {dataLoaded ? (
                week.map((day) => (
                        <Day 
                        key={day.monthNumber.toString() +"-"+ day.number.toString()} 
                        dayData = {day} 
                        activeDay={activeDay}
                        setActiveDay={setActiveDay}
                        />

                    ))
            ) : (
                <td>
                    'false'
                </td>
                
            )}   

        </>
        )
    }


export default Week