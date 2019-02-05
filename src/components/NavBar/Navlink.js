import React from "react";
import { Link } from "react-router-dom";

const Navlink = props => {
  return (
    <Link
      className={props.location === props.path ? "navbar-selected" : "navbar-item"}
      to={props.path}
    >
      {props.name}
    </Link>
  );
};

export default Navlink;
