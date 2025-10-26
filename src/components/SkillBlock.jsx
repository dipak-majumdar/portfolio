import React from 'react';
import skills from "../consts/skills";

export default function SkillBlock({ id, t }) {
    return (
        <div className="skill-block">
            <div className="skill-block__name">{t[id]}</div>
            <ul className="skill-block__list">
                {skills[id].map((techIndex) => (
                    
                    <li key={techIndex} className="skill-block__skill">
                        {techIndex}
                    </li>
                ))}
            </ul>
        </div>
    );
};
