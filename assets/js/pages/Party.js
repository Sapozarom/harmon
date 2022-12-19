import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Week from '../components/party/Week';
import Form from '../components/party/Form';
import PartyInfo from '../components/party/PartyInfo';
import { useQuery } from '@tanstack/react-query';
import getData from '../getData/getData';

const Party = () => {

    let { id } = useParams();

    const [activeDay, setActiveDay] = useState();

    const calendarRoute = `/calendar/${id}`;
    const { data, status } = useQuery({
        queryKey: ['calendar'], 
        queryFn: () => getData(calendarRoute),
        refetchOnWindowFocus: false,
    });

    return(
        <>
            <div className="row mt-3">
                {/* table */}
                <div className="col-xl-6">
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
                                    <Week 
                                    key={id+'-'+index} 
                                    weekData = {week} 
                                    activeDay={activeDay}
                                    setActiveDay={setActiveDay}
                                    />
                                ))
                            ) : (<tr><td>loading</td></tr>)}
                        </tbody>
                    </table>   
                </div>
                {/* FORM */}
                <div className="col-xl-6">
                    <Form key ={id} activeDay={activeDay}/>
                </div>
            </div>
            
            <PartyInfo />
        </>
    )
}

export default Party;