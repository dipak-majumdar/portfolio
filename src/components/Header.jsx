import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MediaIcon from "./MediaIcon";
import logo from '../assets/images/logo.svg';

const Header = ({ t }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (lang) => {
        setCurrentLanguage(lang);
        setShowLanguageDropdown(false);
        // Add language change logic here
    };


    return (
        <header className="header">
            <input 
                className="hamburger" 
                type="checkbox" 
                aria-label="Menu" 
                checked={isMenuOpen}
                onChange={toggleMenu}
            />

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
                        <span className="logo__name">Dipak</span>
                    </Link>
                    
                    <div className="dropdown" onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
                        <span className="dropdown__label">{currentLanguage}</span>
                        {showLanguageDropdown && (
                            <div className="dropdown__list">
                                {['en', 'ru', 'ua'].map((lang) => (
                                    <div 
                                        key={lang}
                                        className={`dropdown__option ${currentLanguage === lang ? 'dropdown__option_active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleLanguageChange(lang);
                                        }}
                                    >
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;