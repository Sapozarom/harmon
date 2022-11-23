import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import Week from '../components/party/Week';
import Form from '../components/party/Form';
import { useQuery } from '@tanstack/react-query';



const Party = () => {

    let { id } = useParams();

    const [activeDay, setActiveDay] = useState();

    // const { data, status } = useQuery(['calendar'], () => getCalendarData());
    // const {gamedata , gameDataStatus} = useQuery(['game'], () => getGameData());

    const { data: game, status: gameStatus } = useQuery({
        queryKey: ['gameData'], 
        queryFn: () => getGameData(),
        // refetchOnWindowFocus: false,
    });

    const { data, status } = useQuery({
        queryKey: ['calendar'], 
        queryFn: () => getCalendarData(),
        refetchOnWindowFocus: false,
    });
    
    const getCalendarData = async () => {
        
        const calendarRoute = 'http://127.0.0.1/api/calendar/'+ id ;
        const response = await fetch(calendarRoute);
        return response.json();
    }

    const getGameData = async () => {
        const gameRoute = 'http://127.0.0.1/api/game-data/'+ id ;
        const response = await fetch(gameRoute);
        return response.json();
    }

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

            {/* PARTY INFO */}
            {gameStatus == 'success' ? (
                <div className="row mt-3">
                    <div className="col-xl">
                        <div className="border bg-light form-panel">
                            <div className="d-flex flex-row justify-content-center party-header bg-dark bg-gradient">
                                <div className="p-0">
                                PARTY INFO
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 ">
                                    <p className="party-name border-bottom pt-2 pb-3"><b><span className="info-label bg-white">PARTY NAME</span></b> {game.partyInfo.name}</p>
                                </div>
                                <div className="col-6">
                                    <p className="party-name  border-bottom pt-2 pb-3"><b><span className="info-label bg-white">ACTIVITY</span></b> {game.partyInfo.activity}</p>
                                </div>
                            </div>
                            
                            <div className="row">
                                <p className="info-display border-bottom   pb-3"><b><span className="info-label bg-white">DESCRIPTION</span></b> {game.partyInfo.description}</p>
                            </div>
                            <div className="row">
                                <p className="info-display border-bottom pb-3">
                                    <b><span className="info-label bg-white">MEMBERS</span></b>
                                    {game.partyInfo.activeMembers.map((player) => (
                                        <span key={player.id} className="player-name"> {player.name}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ''}
            
        </>
    )
}

export default Party;