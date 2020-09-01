import React from "react";
import ProjectItem from "../Projects/ProjectItem";

export default function Projects({ projects }) {
  return (
    <div>
      <h2>projects</h2>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

Projects.prototypes = {
  projects: Proptypes.array.isRequired,
};
