import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavItem = ({item, user}) => {

    // const classNames = "nav-link fs-4 nav-menu-item";

    if (item.type == 'special') {
        
        return (
            <>
                <li className="nav-item">
                    <Link to={item.route} className="nav-link fs-4 nav-menu-item " >
                        <div  className = "border border-2 rounded square-button" >
                            <i className="fa-solid fa-plus "></i>
                        </div>
                    </Link>
                </li>
            </>
            )          
    } else {
        return (
            <>
                <li className="nav-item ">
                    <Link to={item.route} className="nav-link fs-4 nav-menu-item " > {item.name} </Link>
                </li>
            </>
            )
    }

}

export default NavItem