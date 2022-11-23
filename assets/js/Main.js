import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Logout from "./pages/Logout";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Readme from "./pages/Readme";
import Party from "./pages/Party";
import MyActivities from "./pages/MyActivities";
import HostOptions from "./pages/HostOptions";
import uuid from 'react-uuid';

// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import Login from './pages/Login';


const Main = () => {

    const checkIfLoggedIn = async () => {
        const route = '/api/homepage/nav';
        const response = await fetch(route);
        return response.json();
    }

    const { data, status } = useQuery(['user'], () => checkIfLoggedIn());
    
    

    // USUŃ
    console.log(data, status);

    return (
        <>
        {status == "success" ? (
            <BrowserRouter>
            {/* user : {data.user} */}
                <Routes>
                    <Route path="/" element={<Layout user={data.user}/>}>
                            <Route index element={<Homepage />} />
                            <Route path="readme" element={<Readme />} />
                            <Route path="my-activities" element={<MyActivities />} />
                            <Route path="party/show/:id" element={<Party />} />
                            <Route path="party/options/:id" element={<HostOptions />} />
                            <Route path="logout" element={<Logout />} />
                            <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        ) : (
            'loading'
        ) }
            
        </>
    )
}



const MainPage = () => {
    
    const queryClient = new QueryClient();

        return(
            <QueryClientProvider client={queryClient}>
                <Main />
            </QueryClientProvider>
        );
}

export default MainPage;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MainPage  />
);




