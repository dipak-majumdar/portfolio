import React from 'react';

const EducationItem = ({ degree, institution, period, description }) => (
    <div className="education-item">
        <h3 className="education-item__title">{degree}</h3>
        <div className="education-item__meta">
            <span className="education-item__institution">{institution}</span>
            <span className="education-item__period">{period}</span>
        </div>
    </div>
);

export default function Education({ section }) {
    return (
        <section className="education">
            <h2 className="h2">{section.title}</h2>
            <div className="education__list">
                {section.items.map((edu, index) => (
                    <EducationItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}
