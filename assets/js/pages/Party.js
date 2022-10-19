import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
const Party = () => {

    let { id } = useParams();

    return(
        <>
            <div className='row'>
                <h1 className='display-5'>{id}</h1>
            </div>
        </>
    )
}

export default Party;