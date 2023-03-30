import React from 'react'
import Card from '../../shared/layout/card/Card';
import classes from './achievement.module.scss';
function Achievement() {
  return (
    <Card>
        <div className={classes['delivered-package']}>
            <span>1294</span><p>Delivered Packages</p>
            <i className={classes.divider}></i>
        </div>
        <div>
            <span>3594</span><p>Satisfied Customer</p>
        </div>
    </Card>
  )
}

export default Achievement