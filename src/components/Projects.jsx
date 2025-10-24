import React from "react";
import ProjectList from "./ProjectList";

export default function Projects({ section, t, limit }) {
    return (
        <section className="projects">
            <div className="projects__header">
                <h2 className="h2">{section.title}</h2>
                <a className="projects__link" href="/projects">
                    {section.button} ~~&gt;
                </a>
            </div>
            <ProjectList limit={limit} t={t} />
        </section>
    );
};
