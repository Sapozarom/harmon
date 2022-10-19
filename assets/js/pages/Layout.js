import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {useState, useRef, useEffect} from 'react';
import useLoad from 'react-use-load';
import { useLoadState, Loading } from 'react-use-load';
// import useLoad from 'react-use-load';
import NavBar from '../components/nav/NavBar'

const Layout = ({user}) => {

    const [userId,setUserId] = useState(user);
    
  return (
    <>
        <div>
            {/* <DataComponent /> */}
            {/* User = {user} */}
            <NavBar userData={user}/>
            <Outlet context={[userId,setUserId]} />
        </div>
    </>
  )
};

export default Layout;