import React from 'react';
import classes from './getintouchimages.module.scss';

function GetInTouchImages({image}) {
  return (
    <figure className={classes.gallery}>
        <img src={image} alt="explore" />
    </figure>
  )
}

export default GetInTouchImages;