import React from 'react';

const ExperienceItem = ({ title, company, period, description }) => (
    <div className="experience-item">
        <h3 className="experience-item__title">{title}</h3>
        <div className="experience-item__meta">
            <span className="experience-item__company">{company}</span>
            <span className="experience-item__period">{period}</span>
        </div>
        <p className="experience-item__description">{description}</p>
    </div>
);

export default function Experiences({ section }) {
    return (
        <section className="experiences section">
            <h2 className="h2">{section.title}</h2>
            <div className="experiences__list">
                {section.items.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </section>
    );
}
