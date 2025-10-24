import Project from "./Project";
import projectList from "../consts/projects";

export default function ProjectList({ t, limit = projectList.length, filter = () => true }) {
    return (
        <div className="project-list">
            {projectList.filter(filter).slice(0, limit).sort((a, b) => a.hasImage - b.hasImage).map(({ id }) => (
                <Project key={id} id={id} t={t} />
            ))}
        </div>
    );
};
