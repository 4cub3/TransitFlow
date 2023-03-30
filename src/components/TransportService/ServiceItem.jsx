import React from "react";
// import Card from '../../shared/layout/card/Card';
import classes from "./serviceitem.module.scss";
function ServiceItem({ image, title, desc }) {
  return (
    <div className={classes.transportation}>
      <figure>
        <img src={image} alt="transport system" />
      </figure>
      <dl>
        <dt>{title}</dt>
        <dd>{desc}</dd>
      </dl>
    </div>
  );
}

export default ServiceItem;
