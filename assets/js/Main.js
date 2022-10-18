import React from 'react';
import ReactDOM from 'react-dom';
// import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState, useRef, useEffect} from 'react';
import App from './components/App';
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Readme from "./pages/Readme";
import MyActivities from "./pages/MyActivities";
import NavBar from './components/nav/NavBar'
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

const Main = () => {

    const [user,setUser] = useState(null);

    const checkIfLoggedIn = async () => {
        const loginRoute = '/api/homepage/nav';
        const response = await fetch(`${loginRoute}`);
        const data = await response.json();
        setUser(data.user);
        // return(data.user);
    }

    // console.log(user);

    useEffect(() => {
        checkIfLoggedIn();
        // setUser(checkIfLoggedIn());

    },[]);

    return (
        <>
        {/* <NavBar props={user}/> */}
        {/* <Router>
            <Routes>
            <Route exact path="/"  element={<Homepage />} />
            <Route exact path="/readme"  element={<Readme />} />
            <Route exact path="/my-activities"  element={<MyActivities />} />
            </Route>    
            </Routes>
        </Router> */}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                            <Route index element={<Homepage />} />
                            <Route path="readme" element={<Readme />} />
                            <Route path="my-activities" element={<MyActivities />} />
                            {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}



export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}


