import React, { useState, useEffect } from 'react';
import Day from './Day';
const Week = ({weekData, setActiveDate, activeDate, setActiveDateStatus}) => {


    const [week, setWeek] =  useState(weekData);
    const [dataLoaded, setDataLoaded] = useState(false);
    

    const pickDate = (date, status) => {
        setActiveDate(date.substring(0,10))
        setActiveDateStatus(status);
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
                    className={activeDate == (day.date).substring(0,10) ? (day.status+" p-0  picked-date") : day.status+" p-0" } 
                    onClick={() => pickDate(day.date, day.status)}>
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