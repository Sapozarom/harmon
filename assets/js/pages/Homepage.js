import React, { useState, useEffect } from 'react';
import Box from '../components/homepage/Box';
import Disclaimer from '../components/homepage/Disclaimer';

const Homepage = () => {

    const box1 = {
        'title': 'Create party',
        'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
        'text': 'Make a new recouring activity to manage'
    };

    const box2 = {
        'title': 'Add Members',
        'icon': 'fa-regular fa-people-pulling fa-8x m-3 mb-5',
        'text': "Invite your friends"
    };

    const box3 = {
        'title': 'Find date',
        'icon': 'fa-regular fa-calendar-check fa-8x m-3 mb-5',
        'text': ' Place your votes and app will do the rest'
    };

    const boxContent = [box1, box2, box3];

    return(
        <>
            <div className='row justify-content-center mt-3'>
                <div className='col-xl-9'>
                    <Disclaimer />
                </div>   
            </div>

            <div className='row justify-content-center'>
                    <h1 className='display-6 text-center universal-shadow-text'>
                        Welcome
                    </h1>
                <div className='col-xl-9'>
                    
                    <p className='lead'>
                    HARMON is an app that helps to find matching schedules in party of few peope arranged for reccuring
                    activities like sports, board games, digital games or poker. The methodology is wrpaed in 3 sipmple pints below
                    but you will find  more in depth instructrions under <b>this link</b>. You can also get full documentation on my <b>github</b>
                    </p>
                </div>
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-xl-9 '>
                    <div className='row justify-content-center g-4'>
                        {boxContent.map((box) => (
                            <Box key={box.title} content={box} />
                        ))}
                    
                    </div>
                    
                </div>   
            </div>
        </>

    )
}

export default Homepage;