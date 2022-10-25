import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import Week from '../components/party/Week';
import Form from '../components/party/Form';



const Party = () => {

    let { id } = useParams();

    const [calendar, setCalendar] = useState([]);
    const [activeDate, setActiveDate] = useState('date')


    const getCalendarData = async () => {
        
        const loginRoute = 'http://127.0.0.1/api/calendar/'+ id ;
        const response = await fetch(loginRoute);
        const data = await response.json();
        // console.log(data.calendar);
        setCalendar(data.calendar);
    }

    useEffect(() => {
        getCalendarData();
    },[]);



    return(
        <>
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    Prty XXX
                </h1>
            </div>
            <div className="row">
                {/* table */}
                <div className="col-lg-6">
                    <table className="table calendar">
                        <caption className="bg-dark bg-gradient" >September</caption>
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

                            {calendar.map((week, index) => (
                                <tr>
                                    <Week key={index} weekData = {week} setActiveDate={setActiveDate} />
                                </tr>
                                ))}
                        </tbody>
                    </table>   
                </div>
                {/* FORM */}
                <div className="col-lg-6">
                    <Form activeDate={activeDate} />
                </div>
            </div>
        </>
    )
}

export default Party;