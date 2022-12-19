import { useQuery } from '@tanstack/react-query';
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import OptionPanel from '../components/hostOptions/OptionsPanel';
import PartyInfo from '../components/party/PartyInfo';

const HostOptions = () => {


    return(
        <>
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    Party host panel
                </h1>
            </div>

            <div className='row'>
                <div className='col-xl-6'>
                    <OptionPanel />
                </div>
                
                <div className='col-xl-6'>
                    <PartyInfo />
                </div>
            </div>
            
        </>
    )
}

export default HostOptions;