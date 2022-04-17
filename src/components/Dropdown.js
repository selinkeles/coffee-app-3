import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { coffeeDropdown } from "../data";
import "./Dropdown.css";

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
    return <>
        <ul className={dropdown ? 'coffee-submenu clicked' : 'coffee-submenu'}
        onClick={() => setDropdown(!dropdown)}
        >
            { coffeeDropdown.map(item => {
                return (
                    <li key ={item.id}>
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                            {item.title}
                        </Link>
                    </li>
                
                )})}
        </ul>
    
    </>;
}