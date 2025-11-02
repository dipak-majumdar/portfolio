import React from 'react';
import projects from "../consts/projects";
import websites from "../consts/websites";
import techs from "../consts/techs";
import media from "../consts/media";

export default function Project({ eachProject, t }) {

    const { hasImage, button } = eachProject;

    const mapLinks = (button) => {
        // Nothing to render
        if (!button) return null;

        // If button is a single-button object like { name: 'Live', url: 'https://...' }
        if (typeof button === 'object' && (button.url || button.name)) {
            const href = button.url || '#';
            const label = button.name || button.label || href;

            return (
                <a
                    key={label}
                    href={href}
                    className={`button`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {label}
                </a>
            );
        }
        return null;
    };

    return (
        <div className="project">
            {hasImage && (
                <img 
                    src={`/src/assets/images/projects/${eachProject.name.toLowerCase()}.png`} 
                    alt={eachProject.name} 
                    className="project__image"
                />
            )}
            
            <ul className="project__techs">
                {eachProject.techs.map(tech => (
                    <li key={tech} className="project__tech">
                        {tech}
                    </li>
                ))}
            </ul>

            <div className="project__content">
                <div className='head'>
                    <h3 className="name">{eachProject.name}</h3>
                    <a href={button.url} className="button" target="_blank"
                    rel="noopener noreferrer" >{button.name}</a>
                </div>
                <div className="project__description">{eachProject.description || ''}</div>
            </div>
        </div>
    );
};

