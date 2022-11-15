import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import Week from '../components/party/Week';
import Form from '../components/party/Form';
import { useQuery } from '@tanstack/react-query';



const Party = () => {

    let { id } = useParams();

    const [activeDay, setActiveDay] = useState();

    const { data, status } = useQuery(['calendar'], () => getCalendarData());

    const getCalendarData = async () => {
        
        const loginRoute = 'http://127.0.0.1/api/calendar/'+ id ;
        const response = await fetch(loginRoute);
        return response.json();
    }


    return(
        <>
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    Party XXX
                </h1>
            </div>
            <div className="row">
                {/* table */}
                <div className="col-lg-6">
                    <table className="table calendar">
                        <caption className="bg-dark bg-gradient" >MONTH DISPLAY</caption>
                        <thead>
                            <tr>
                            <th scope="col">Mon</th>
                            <th scope="col">Tue</th>
                            <th scope="col">Wed</th>
                            <th scope="col">Thu</th>
                            <th scope="col">Fri</th>
                            <th scope="col">Sat</th>
                            <th scope="col">Sun</th>
                            </tr>
                        </thead>
                        <tbody>
                        {status == 'success' ? (
                            data.calendar.map((week, index) => (
                                <tr>
                                    <Week 
                                    key={id+'-'+index} 
                                    weekData = {week} 
                                    activeDay={activeDay}
                                    setActiveDay={setActiveDay}
                                    />
                                </tr>
                                ))
                        ) : (<tr><td>loading</td></tr>)}
                           
                        </tbody>
                    </table>   
                </div>
                {/* FORM */}
                <div className="col-lg-6">
                    <Form activeDay={activeDay}/>
                </div>
            </div>
        </>
    )
}

export default Party;