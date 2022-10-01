import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from "@fortawesome/free-regular-svg-icons";


export default function Nav() {
    return(
        <nav>
            <div className="site-name">GameCenter <FontAwesomeIcon icon={faChessKnight} ></FontAwesomeIcon></div>
            <div className="nav-list">
                <a className="nav-list-el1" href="">Games</a>
                <a className="nav-list-el2" href="">Profile</a>
            </div>
        </nav>
        
    )
}