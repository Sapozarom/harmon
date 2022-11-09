import React, { useState, useEffect } from 'react';
import Day from './Day';
const Week = ({weekData, activeDay, setActiveDay, activeDateStatus, setActiveDateStatus, setActiveDate, activeDate, }) => {


    const [week, setWeek] =  useState(weekData);
    const [dataLoaded, setDataLoaded] = useState(false);
    

    const pickDate = (day) => {
        setActiveDay(day);
        setActiveDateStatus(day.status)
    }

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
                    <td 
                    className={activeDay.date == day.date ? (activeDateStatus +" p-0  picked-date") : day.status+" p-0" } 
                    onClick={() => pickDate(day)}>
                        {/* {day.date.substring(0,10)} */}
                        <Day 
                        key={day.monthNumber.toString() +"-"+ day.number.toString()} 
                        dayData = {day} 
                        
                        />
                    </td>
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