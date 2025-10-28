import React from 'react';

export default function About({section}) {
    return (
        <>
        <section className="about">
            <div className="about__content">
                <h2 className="h2">{section.title}</h2>
                <div className="about__text">
                    {section.description.map(
                        (text, idx) =>
                            <p className="about__description" key={idx}>{text}</p>
                    )}
                </div>
                {/* <a href="/about-me" className="button">{section.button} &gt;</a> */}
            </div>
        </section>
        </>);
};
