import React from "react";
import './Header.css';
import Aside from '../aside/Aside';

export default function() {
    return(
        <nav>
            <div><img src="images/logo_pet.png" alt="logo"/></div>
            <ul>
                <li>ГОЛОВНА</li>
                <li>ГАЛЕРЕЯ</li>
                <li>ПРО НАС</li>
                <li>КОНТАКТИ</li>
            </ul>
        </nav>

    )
}