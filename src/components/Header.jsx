import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import routes, { getNavigationRoutes } from "../consts/routes";
import MediaIcon from "./MediaIcon";
import logo from '../assets/images/logo.svg';

const Header = ({ t }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    // Get navigation routes (excluding 404)
    const navigationRoutes = getNavigationRoutes();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (lang) => {
        setCurrentLanguage(lang);
        setShowLanguageDropdown(false);
        // Add language change logic here
    };

    // Helper function to get translation text
    const getTranslationText = (translationKey) => {
        if (!t || !translationKey) return '';
        
        // Split the key and navigate through the object
        const keys = translationKey.split('.');
        let result = t;
        
        for (const key of keys) {
            result = result?.[key];
            if (result === undefined) break;
        }
        
        return result || '';
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
                    {["discord", "github", "email"].map((name) => (
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
                    
                    <nav className={`header__links ${isMenuOpen ? 'header__links_active' : ''}`}>
                        {navigationRoutes.map((route) => (
                            <Link
                                key={route.path}
                                to={route.path}
                                className={`header__link ${
                                    location.pathname === route.path ? 'header__link_active' : ''
                                }`}
                            >
                                {getTranslationText(route.translationKey) || route.name}
                            </Link>
                        ))}
                    </nav>
                    
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