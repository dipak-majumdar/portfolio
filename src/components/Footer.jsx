import React from 'react';
import MediaIcon from "./MediaIcon";
import media from "../consts/media";
import logo from '../assets/images/logo.svg';

export default function Footer({ section }) {
    console.log(section);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__copyright">© {section.copyright}</div>
            </div>
        </footer>
    );
}
