import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectItem() {
  return (
    <div>
      <img src="http://lorempixel.com/400/200/" alt="test" />
      <Link>github</Link>
      <Link>application</Link>
    </div>
  );
}
