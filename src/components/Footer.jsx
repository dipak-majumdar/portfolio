import React from 'react';

export default function Footer({ section }) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__copyright">© {section.copyright}</div>
            </div>
        </footer>
    );
}
