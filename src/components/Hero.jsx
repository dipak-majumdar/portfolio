import React from 'react';
import Dots from "./Dots";
import logoOutline from '../assets/images/logo-outline.svg';
import hero from '../assets/images/hero.png';
import dipak from '../assets/images/dipak.jpg';

// import "../assets/styles/components/hero.sass";

export default function Hero({ title, description, button, status }) {
  return (
    <section className="hero">
        <div className="hero__content">
            <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="hero__description">{description}</div>
            <a className="button button__primary" href="#contacts">{button} =&gt;</a>
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