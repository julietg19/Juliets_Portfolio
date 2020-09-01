import React, { Component } from "react";
import ProjectItem from "../Projects/ProjectItem";
import Proptypes from "prop-types";
export default class ProjectsPage extends Component {
  state = {
    projects: [],
    project: {},
  };
  render() {
    return (
      <div>
        <h2>projects</h2>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    );
  }
}

ProjectsPage.prototypes = {
  projects: Proptypes.array.isRequired,
};
