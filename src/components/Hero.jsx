import React from 'react';
import Dots from "./Dots";
import logoOutline from '../assets/images/logo-outline.svg';
import hero from '../assets/images/hero.png';
import dipak from '../assets/images/dipak.jpg';
import linkedin from '../assets/images/icons/linkedin.svg';
import email from '../assets/images/icons/email.svg';
import dial from '../assets/images/icons/dial.svg';

// import "../assets/styles/components/hero.sass";

export default function Hero({ title, description, button, status }) {
  return (
    <section className="hero">
        <div className="hero__content">
            <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="hero__description">{description}</div>
            <div className="hero__button__box">
              <a className="button button__hero" href="https://linkedin.com/in/dipak-majumdar"><img src={linkedin} alt="" srcset="" /></a>
              <a className="button button__hero" href="mailto:dipakmajumdar@zohomail.in"><img src={email} alt="" srcset="" /></a>
              <a className="button button__hero" href="tel:+91 7699753019"><img src={dial} alt="" srcset="" /> Contact Me</a>
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