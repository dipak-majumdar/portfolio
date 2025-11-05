import React from 'react';

export default function Footer({ section }) {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer__copyright" dangerouslySetInnerHTML={{ __html: section.copyright }}/>
            </div>
        </footer>
    );
}
