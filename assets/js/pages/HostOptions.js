import { useQuery } from '@tanstack/react-query';
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const HostOptions = () => {

    const { id } = useParams();
    const { data: game, status: gameStatus } = useQuery({
        queryKey: ['gameInfo'], 
        queryFn: () => getGameData(),
        refetchOnWindowFocus: false,
    });

    const getGameData = async () => {
        const gameRoute = 'http://127.0.0.1/api/game-data/'+ id ;
        const response = await fetch(gameRoute);
        return response.json();
    }

    return(
        <>
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    Party host panel
                </h1>
            </div>

            <div className='row'>
                <div className='col-xl-6'>
                
                </div>
                
                <div className='col-xl-6'>
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
                </div>


            </div>
            
        </>
    )
}

export default HostOptions;