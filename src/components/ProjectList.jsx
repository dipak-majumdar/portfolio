import React from "react";
import Project from "./Project";
import projects from "../consts/projects";

export default function ProjectList({limit = projects.length, filter = () => true }) {
    // print each project here
    return (
        <div className="project-list">
            {projects.filter(filter).slice(0, limit).sort((a, b) => a.hasImage - b.hasImage).map((eachproject, {id}) => (
                <Project key={id} eachProject={eachproject} />
            ))}
        </div>
    );
};
