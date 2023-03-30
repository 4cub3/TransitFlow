import React from 'react'
import { Link } from 'react-router-dom';
import classes from './pages.module.scss';
function Pages() {
  return (
    <ul className={classes.pages}>
        <li>
            <Link to='/'>
                About Us
            </Link>
        </li>
        <li>
            <Link to='/'>
                Our Team
            </Link>
        </li>
        <li>
            <Link to='/'>
                Our project
            </Link>
        </li>
        <li>
            <Link to='/'>
            Pricing
            </Link>
        </li>
        <li>
            <Link to='/'>
            Contact
            </Link>
        </li>
    </ul>
  )
}

export default Pages