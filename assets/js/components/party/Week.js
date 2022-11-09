import React, { useState, useEffect } from 'react';
import Day from './Day';
const Week = ({weekData, setActiveDate, activeDate, setActiveDateStatus, activeDateStatus}) => {


    const [week, setWeek] =  useState(weekData);
    const [dataLoaded, setDataLoaded] = useState(false);
    

    const pickDate = (day) => {
        setActiveDate(day.date.substring(0,10))
        setActiveDateStatus(day.status);
    }

    useEffect(() => {

        if (typeof weekData !== 'undefined') {
            setDataLoaded(true);
        }
    },[week]);
    // console.log(activeDate);
   
        return (
        <>

        {dataLoaded ? (
                week.map((day) => (
                    <td 
                    className={activeDate == (day.date).substring(0,10) ? (activeDateStatus +" p-0  picked-date") : day.status+" p-0" } 
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