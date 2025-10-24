import React from 'react';
import aboutMe from '../assets/images/about-me.png';

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

                <a href="/about-me" className="button">{section.button} -></a>
            </div>
            <img src={aboutMe} alt="" className="about__image" />
        </section>
        </>);
};
