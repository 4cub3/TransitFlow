import React from "react";
import classes from "./utilities.module.scss";
import { Link } from "react-router-dom";
function Utilities() {
  return (
    <ul className={classes.utilities}>
      <li>
        <Link to="/">Style Guide</Link>
      </li>
      <li>
        <Link to="/">Changelog</Link>
      </li>
      <li>
        <Link to="/">Licences</Link>
      </li>
      <li>
        <Link to="/">Protected</Link>
      </li>
      <li>
        <Link to="/">Not Found</Link>
      </li>
    </ul>
  );
}

export default Utilities;
