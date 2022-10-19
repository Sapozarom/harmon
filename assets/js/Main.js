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


const Main = ({user, logged}) => {
    // const localUser = window.localStorage.getItem('MY_APP_USER');

    const [userId,setUserId] = useState(user);
    const [userLogged,setserLogged] = useState(logged);

    return (
        <>
        
            <BrowserRouter>
            user : {userId}, Logged:  {userLogged ? 'true' : 'false'}
                <Routes>
                    <Route path="/" element={<Layout user={userId}/>}>
                            <Route index element={<Homepage />} />
                            <Route path="readme" element={<Readme />} />
                            <Route path="my-activities" element={<MyActivities />} />
                            <Route path="party/show/:id" element={<Party />} />
                            <Route path="logout" element={<Logout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
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
    // const [,updateState] = useState();
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

export default Main;


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UserCheck  />);

// if (document.getElementById('root')) {
//     ReactDOM.render(<Main />, document.getElementById('root'));
// }


