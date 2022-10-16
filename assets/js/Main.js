import React from 'react';
import ReactDOM from 'react-dom';
// import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './components/App';
import Homepage from "./pages/Homepage";
import Readme from "./pages/Readme";
import MyActivities from "./pages/MyActivities";
import NavBar from './components/nav/NavBar'
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

function Main() {
    return (
        <>
        <NavBar />
        <Router>
            <Routes>
                {/* <Route exact path=""  element={<Homepage />} /> */}
                <Route exact path="/"  element={<Homepage />} />
                <Route exact path="/readme"  element={<Readme />} />
                <Route exact path="/my-activities"  element={<MyActivities />} />
            </Routes>
        </Router>
        </>

    )
    
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}


// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//     (
//         // <StrictMode>
//             <App />
//         // </StrictMode>
        
//     )
// );

