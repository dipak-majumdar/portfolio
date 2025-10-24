import React from 'react';
import projects from "../consts/projects";
import websites from "../consts/websites";
import techs from "../consts/techs";
import media from "../consts/media";

export default function Project({ id, t }) {
    const project = projects.find(p => p.id === id);
    
    if (!project) {
        return <div>Project not found</div>;
    }

    const { hasImage, techs: projectTech, links } = project;

    const mapLinks = (links) => {
        return Object.keys(links).map(link => {
            let href = "https://" + (link === "live" ? "" : websites[link]) + links[link];

            if (link === "figma") {
                href = `https://figma.com/community/file/${links[link]}`;
            }
            if (link === "github" && links[link].startsWith("/")) {
                href = media.github + links[link];
            }

            const className = link === "cached" ? "button__secondary" : "";
            const name = `${link[0].toUpperCase()}${link.slice(1)}`;

            return (
                <a key={link} href={href} className={`button ${className}`}>
                    {name} =&gt;
                </a>
            );
        });
    };

    return (
        <div className="project">
            {hasImage && (
                <img 
                    src={`/src/assets/images/projects/${id}.webp`} 
                    alt={t[id]?.name || id} 
                    className="project__image"
                />
            )}
            
            <ul className="project__techs">
                {projectTech.map(tech => (
                    <li key={tech} className="project__tech">
                        {techs[tech]}
                    </li>
                ))}
            </ul>

            <div className="project__content">
                <div className="project__name">{t[id]?.name || id}</div>
                <div className="project__description">{t[id]?.description || ''}</div>
                <div className="project__links">{mapLinks(links)}</div>
            </div>
        </div>
    );
};

