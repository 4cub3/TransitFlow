import React from 'react'
import { Link } from 'react-router-dom';
import classes from './newsimage.module.scss';
function NewsImage({image}) {
  return (
    <figure className={classes.newsImage}>
        <img src={image} alt="" />
        <Link to='/'>
            Read more
        </Link>
    </figure>
  )
}

export default NewsImage