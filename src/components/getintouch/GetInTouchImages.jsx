import React from 'react';
import classes from './getintouchimages.module.scss';

function GetInTouchImages({image,logo}) {
  return (
    <figure className={classes.gallery}>
        <img src={image} alt="explore" />
        <img src={logo} alt="" />
    </figure>
  )
}

export default GetInTouchImages;