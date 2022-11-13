import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState, useRef, useEffect} from 'react';
import App from './components/App';
import Logout from "./pages/Logout";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Readme from "./pages/Readme";
import Party from "./pages/Party";
import MyActivities from "./pages/MyActivities";
import NavBar from './components/nav/NavBar'
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

import { useLoadState, Loading } from 'react-use-load';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';


const Main = ({user, logged}) => {
    // const localUser = window.localStorage.getItem('MY_APP_USER');

    const checkIfLoggedIn = async () => {
        const route = '/api/homepage/nav';
        const response = await fetch(route);
        return response.json();
    }

    const { data, status } = useQuery(['user'], () => checkIfLoggedIn());
    const [userId,setUserId] = useState(user);
    const [userLogged,setserLogged] = useState(logged);

    console.log(data, status);
    return (
        <>
        {status == "success" ? (
            <BrowserRouter>
            user : {data.user}
                <Routes>
                    <Route path="/" element={<Layout user={data.user}/>}>
                            <Route index element={<Homepage />} />
                            <Route path="readme" element={<Readme />} />
                            <Route path="my-activities" element={<MyActivities />} />
                            <Route path="party/show/:id" element={<Party />} />
                            <Route path="logout" element={<Logout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        ) : (
            'loading'
        ) }
            
        </>
    )
}

const Slave = () => {
    // const localUser = window.localStorage.getItem('MY_APP_USER');

    // const [userId,setUserId] = useState(user);
    // const [userLogged,setserLogged] = useState(logged);

    return (
        <>
        
            <BrowserRouter>
            Slave
                <Routes>
                    <Route path="/" element={<Layout />}>
                            <Route index element={<Homepage />} />
                            <Route path="readme" element={<Readme />} />
                            <Route path="my-activities" element={<MyActivities />} />
                            <Route path="logout" element={<Logout />} />
                            <Route path="party/show/:id" element={<Party />} />
                            {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


const UserCheck = () => {
    
    // const [, updateState] = React.useState();

    // const localUser = window.localStorage.getItem('MY_APP_USER');
    // const localUser = null;
    const [user,setUser] = useState();
    const [userLogged,setUserLogged] = useState(false);
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const checkIfLoggedIn = async () => {
        const loginRoute = '/api/homepage/nav';
        const response = await fetch(`${loginRoute}`);
        const data = await response.json();
        setUser(data.user);
        // return data.user.then(r => r.json());
        // console.log(data.user);
        // return(data.user);
    }

    useEffect(() => {
        checkIfLoggedIn();
    });

    useEffect(() => {
        if (user != null) {
            setUserLogged(true);
        }
    },[user]);
    
    if (userLogged) {
        return <Main 
        user={user}
        logged={userLogged}
        />
    } else {
        return <Slave />
    }
    
}

const MainPage = () => {
    
    const queryClient = new QueryClient();

        return(
            <QueryClientProvider client={queryClient}>
                <Main />
            </QueryClientProvider>
        );
}

export default Main;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MainPage  />
);




