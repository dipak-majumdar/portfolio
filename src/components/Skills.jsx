import React from 'react';
import Dots from "./Dots";
import SkillBlock from "./SkillBlock";
import skillList from "../consts/skills";
import logoOutline from '../assets/images/logo-outline.svg';

export default function Skills({ section, t }) {
    return (
        <section className="skills">
            <h2 className="h2">{section.title}</h2>
            <div className="skills__content">
                <div className="skills__illustrations illustrations">
                    <img src={logoOutline} alt="" className="illustrations__logo" />
                    <Dots width={4} height={4} />
                    <Dots width={6} height={6} />
                </div>
                <div className="skills__list">
                    {Object.keys(skillList)
                        .map((id) => (
                            <SkillBlock key={id} id={id} t={t} />
                        ))}
                </div>
            </div>
        </section>
    );
};
