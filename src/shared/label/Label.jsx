import React from 'react'
import classes from './label.module.scss';
function Label({children}) {
  return (
    <p className={classes.label}>{children}</p>
  )
}

export default Label