import React, {useState, useRef, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

const NavItem = ({item}) => {

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
                    {/* <a className="nav-link fs-4 nav-menu-item "  href={item.route} >{item.name}</a> */}
                </li>
            </>
            )
    }


}

export default NavItem