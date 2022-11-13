import React, {useState, useRef, useEffect} from 'react';
import NavItem from './NavItem';


const Navbar = ({userData}) => {

    const navItem1 = {
        'name': 'Home',
        'route': '/',
        'type': 'open',
        'active': false
    };

    const navItem2 = {
        'name': 'My Activities',
        'route': '/my-activities',
        'type': 'loggedIn',
        'active': false
    };

    const navItem3 = {
        'name': 'ReadMe',
        'route': '/readme',
        'type': 'open',
        'active': false
    };

    const navItem4 = {
        'name': '+',
        'route': '/game/create',
        'type': 'special',
        'active': false
    };

    const navItem5 = {
        'name': 'Logout',
        'route': '/logout',
        'type': 'loggedIn',
        'active': false
    };

    const navItem6 = {
        'name': 'Login',
        'route': '/login',
        'type': 'loggedOut',
        'active': false
    };

    const navItem7 = {
        'name': 'Register',
        'route': '/register',
        'type': 'loggedOut',
        'active': false
    };

    const allNavbarItems = [navItem1, navItem2, navItem3, navItem4, navItem5, navItem6, navItem7];

    const [user,setUser] = useState(userData);
    const [navbar,setNavbar] = useState([]);
    console.log("nav user: ",user);
    const createNavbar = () => {
        const navbarContent = [];
        allNavbarItems.forEach(item => {
            if (user == null) {
                if (item.type == 'loggedOut' || item.type == 'open' ) {
                    navbarContent.push(item);
                }
            } else {
                if ( item.type == 'loggedIn' || item.type == 'special' || item.type == 'open' ) {
                    navbarContent.push(item);
                }
            }
        });
        setNavbar(navbarContent);
    }

    useEffect(() => {
        createNavbar();
    },[user]);


        return (
            <>
            {/* navbar user = {userData}; */}
            {/* PAGE TITLE */}
                <div className='row text-center'>
                    <h1 className='display-1 universal-shadow-text'>HARMON</h1>
                </div>
    
                <div className='row'>
                    <div className='rounded-wrapper'>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient m-0">
                            <div className="container-fluid m-0">
                            {/* COLAPSE BUTTON */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
        
                                {/* NAV ITEMS */}
                                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                    <ul className="navbar-nav m-0 align-middle">

                                        {navbar.map((navItem) => (
                                            <NavItem key={navItem.name} item={navItem} user={user}/>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </nav> 
                    </div>
                </div>
            </>
        )
    }


export default Navbar