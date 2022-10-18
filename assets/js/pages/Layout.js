import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {useState, useRef, useEffect} from 'react';
import NavBar from '../components/nav/NavBar'

const Layout = () => {

    const [user,setUser] = useState(null);

    const checkIfLoggedIn = async () => {
        const loginRoute = '/api/homepage/nav';
        const response = await fetch(`${loginRoute}`);
        const data = await response.json();
        setUser(data.user);

    }
    useEffect(() => {
        checkIfLoggedIn();
        // setUser(checkIfLoggedIn());
    },[]);

    useEffect(() => {
        
        // checkIfLoggedIn();
        // setUser(checkIfLoggedIn());
    },[user]);
  return (
    <>
    {typeof user == 'object' ?
    (
        <div>
            <NavBar props={user}/>
            <Outlet props={user} />
        </div>

    ) : (
        <div>
        <NavBar props={0}/>
        <Outlet props={0} />
        </div>
    )
    }

    </>
  )
};

export default Layout;