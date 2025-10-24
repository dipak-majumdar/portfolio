import React from 'react';
import MediaIcon from "./MediaIcon";
import media from "../consts/media";
import logo from '../assets/images/logo.svg';

export default function Footer({ section }) {
    console.log(section);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__info">
                        <div className="footer__header">
                            <div className="logo">
                                <img src={logo} alt="logo" className="logo__img" />
                                <div className="logo__name">Dipak</div>
                            </div>
                            <a className="footer__email" href={media.email}>
                                {media.emailRaw}
                            </a>
                        </div>
                        <p className="footer__description">{section.description}</p>
                    </div>
                    <div className="footer__media">
                        <div className="footer__title">{section.media}</div>
                        <div className="footer__list">
                            {["figma", "github", "discord"].map((name) => (
                                <MediaIcon key={name} name={name} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">© {section.copyright}</div>
            </div>
        </footer>
    );
}
