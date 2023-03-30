import React from 'react'
import classes from './newsdetails.module.scss';
import { Link } from 'react-router-dom';
function NewsDetails({heading, title,list}) {
    const listItem = list.map((data,idx) =>(
        <li key={idx}>{data}</li>
    ))
  return (
    <div className={classes.newsDetails}>
        <h2><Link to='/'>{heading}</Link></h2>
        <p>{title}</p>
        <ul>
            {listItem}
        </ul>
    </div>
  )
}

export default NewsDetails