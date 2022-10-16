import React, {useState, useRef, useEffect} from 'react';


const NavItem = ({item}) => {

    // const classNames = "nav-link fs-4 nav-menu-item";

    if (item.type == 'special') {
        
        return (
            <>
                <li className="nav-item">
                    <a className="nav-link fs-4 nav-menu-item"  href={item.route} >
                        <div  className = "border border-2 rounded square-button" >
                            <i className="fa-solid fa-plus "></i>
                        </div>
                    </a>
                </li>
            </>
            )          
    } else {
        return (
            <>
                <li className="nav-item ">
                    <a className="nav-link fs-4 nav-menu-item "  href={item.route} >{item.name}</a>
                </li>
            </>
            )
    }


}

export default NavItem