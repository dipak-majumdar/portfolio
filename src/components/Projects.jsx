import React from "react";
import ProjectList from "./ProjectList";

export default function Projects({ t, t2 }) {
    return (
        <section className="projects">
            <div className="projects__header">
                <h2 className="h2">{t.title}</h2>
                <a className="projects__link" href="/projects">
                    {t.button} ~~&gt;
                </a>
            </div>
            <ProjectList limit={3} t={t2} />
        </section>
    );
};
