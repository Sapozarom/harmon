import React from 'react';
import ReactDOM from 'react-dom';
// import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './components/App';
import Homepage from "./pages/Homepage";
import Readme from "./pages/Readme";
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Homepage />} />
                <Route exact path="/README"  element={<Readme />} />
            </Routes>
        </Router>
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

