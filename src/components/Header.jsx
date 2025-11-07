import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MediaIcon from "./MediaIcon";
import logo from '../assets/images/logo.svg';

const Header = ({ t }) => {
    const location = useLocation();

    // Live clock state
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);


    return (
        <header className="header">

            <div className="media-header">
                <span className="media-header__line"></span>
                <div className="media-header__links">
                    {["linkedin", "github", "email"].map((name) => (
                        <MediaIcon key={name} name={name} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="logo">
                        <img className="logo__img" src={logo} alt="Dipak logo" />
                        <span className="logo__name" aria-live="polite">{now.toLocaleTimeString('en-US')}</span>
                    </Link>
                    
                    <div class="download-button">
                        <div class="button-wrapper">
                            <div class="text">Download CV</div>
                            <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;