import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Day from './Day';
const Week = ({weekData, activeDay, setActiveDay}) => {


    const [week, setWeek] =  useState(weekData);
    const [dataLoaded, setDataLoaded] = useState(false);
    
    let { id } = useParams();


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
                        key={id+'-'+day.monthNumber.toString() +"-"+ day.number.toString()} 
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