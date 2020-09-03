import React from "react";
import Proptypes from "prop-types";

export default function ProjectItem({
  project: { imageUrl, githubLink, deployLink },
}) {
  return (
    <div className="col-md-4">
      <img src={imageUrl} alt="test" />
      <a className="d-block" href={githubLink} target="_blank">
        github
      </a>
      <a className="d-block" href={deployLink} target="_blank">
        application
      </a>
    </div>
  );
}

