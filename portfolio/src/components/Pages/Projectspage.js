import React, { Component } from "react";
import ProjectItem from "../Projects/ProjectItem";
import Proptypes from "prop-types";
export default class ProjectsPage extends Component {
  state = {
    projects: [
      {
        id: 1,
        imageUrl: "https://i.imgur.com/HW5ty7g.png",
        githubLink: "https://github.com/julietg19/EmployeeDirectory",
        deployLink: "https://employeedirectory19.herokuapp.com/",
      },
      {
        id: 2,
        imageUrl: "https://i.imgur.com/c0tPTa0.png",
        githubLink: "https://github.com/julietg19/FitnessTracker",
        deployLink:
          "https://fitness-tracker19.herokuapp.com/?id=5f63f13aaeeed33b442f0cdf",
      },
      {
        id: 3,
        imageUrl: "https://i.imgur.com/9DPo6r3.png",
        githubLink: "https://github.com/julietg19/NoteTaker",
        deployLink: "https://notetaker19.herokuapp.com/",
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
