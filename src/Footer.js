import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
    return (
        <footer>
            <a className="footer-git" target="_blank" href='https://github.com/caata'>GitHub <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></a>
        </footer>
    )
}