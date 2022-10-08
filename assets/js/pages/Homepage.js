import React, { useState, useEffect } from 'react';
import App from '../components/App';

const Homepage = () => {

    const checkIfLoggedIn = async () => {
        const loginRoute = '/api/login';
        const response = await fetch(`${loginRoute}`);
        const data = await response.json();

        alert(data);

        
    }

    useEffect(() => {
        checkIfLoggedIn();
    },[]);

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();

    //     setMovies(data.Search);
    // }
    // function checkIfLoggedIn() {

    // }

    return(
        <>

        {/* PAGE TITLE */}
            <div className='row text-center'>
                <h1 className='display-1'>HARMON</h1>
            </div>

            <div className='row'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                    <div className="container-fluid">
                    {/* COLAPSE BUTTON */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* NAV ITEMS */}
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav ">
                                {/* NAV ITEM */}
                                <li className="nav-item">
                                    <a className="nav-link active fs-4 nav-menu-item" aria-current="page" href="{{ path('app_homepage') }}">Home</a>
                                </li>
                                {/* NAV ITEM */}
                                <li className="nav-item">
                                    <a className="nav-link nav-item-text fs-4" href="{{ path('my_activities') }}">My Activities</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-item-text fs-4" href="/README">README</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>              
            </div>

            <div className='row'>
                <App />
            </div>

        </>

    )
}

export default Homepage;