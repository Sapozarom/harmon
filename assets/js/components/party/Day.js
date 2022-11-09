import React from 'react';

const Day = ({dayData}) => {
    
        return (
        <>
            <div className="calendar-day" >     
                {dayData.number}
            </div>
        </>
        )
    }


export default Day