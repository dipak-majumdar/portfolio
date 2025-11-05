import React from 'react';
import Dots from "./Dots";
import logoOutline from '../assets/images/logo-outline.svg';
import dipak from '../assets/images/dipak.jpg';
import github from '../assets/images/icons/github.svg';
import linkedin from '../assets/images/icons/linkedin.svg';
import email from '../assets/images/icons/email.svg';
import dial from '../assets/images/icons/dial.svg';

// import "../assets/styles/components/hero.sass";

export default function Hero({ name, title, description, button, status }) {
  return (
    <section className="hero">
        <div className="hero__content">
            <h1 className="hero__name" dangerouslySetInnerHTML={{ __html: name }} />
            <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className='hero__locationbox'>
              <img src="/assets/images/icons/globe.svg" alt="location" />
              <p>Kolkata, India</p>
            </div>
            {/* <div className="hero__description">{description}</div> */}
            <div className="hero__button__box">
              <a className="button button__hero" target='_blank' rel="noopener noreferrer" href="https://github.com/dipak-majumdar/">
                <img src={github} alt="github" />
              </a>
              <a className="button button__hero" target='_blank' rel="noopener noreferrer" href="https://linkedin.com/in/dipak-majumdar">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a className="button button__hero" href="mailto:dipakmajumdar@zohomail.in">
                <img src={email} alt="email" />
              </a>
              <a className="button button__hero" href="tel:+91 7699753019">
                <img src={dial} alt="phone" />{button}
              </a>
            </div>

        </div>
        <div className="hero__illustrations">
            <img src={logoOutline} alt="" className="hero__logo" />
            <img src={dipak} alt="Dipak" className="hero__image" />
            {/* <div className="hero__status">{status}</div> */}
            <Dots />
        </div>
    </section>
  )
}