import React, { useState, useEffect } from 'react';
import PartyList from '../components/myActivities/PartyList';
import Box from '../components/homepage/Box';
import Disclaimer from '../components/homepage/Disclaimer';

const MyActivities = () => {

    const box1 = {
        'title': 'Create party',
        'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
        'text': 'Make a new recouring activity to manage'
    };


    // const boxContent = [box1, box2, box3];

    return(
        <>
            {/* title */}
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    List of parties
                </h1>
            </div>

            {/* table */}
            <div className='row justify-content-center mt-4'>
                <PartyList />
            </div>

        </>

    )
}

export default MyActivities;