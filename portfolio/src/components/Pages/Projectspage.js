import React, { Component } from "react";
import ProjectItem from "../Projects/ProjectItem";
import Proptypes from "prop-types";
export default class ProjectsPage extends Component {
  state = {
    projects: [
      {
        id: 1,
        imageUrl: "https://picsum.photos/300/300",
        githubLink: "https://github.com",
        deployLink: "https://google.com",
      },
      {
        id: 2,
        imageUrl: "https://picsum.photos/300/300",
        githubLink: "https://github.com",
        deployLink: "https://google.com",
      },
      {
        id: 3,
        imageUrl: "https://picsum.photos/300/300",
        githubLink: "https://github.com",
        deployLink: "https://google.com",
      },
    ],
    project: {},
  };
  render() {
    return (
      <div className="container">
        <h2>projects</h2>
        <div className="row">
        {this.state.projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
        </div>
      </div>
    );
  }
}

ProjectsPage.prototypes = {
  projects: Proptypes.array.isRequired,
};
