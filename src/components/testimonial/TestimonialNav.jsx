import React from 'react'
import  {FaArrowLeft, FaArrowRight}from 'react-icons/fa';
import classes from './testimonialnav.module.scss';
function TestimonialNav() {
  return (
    <nav className={classes.nav} >
        <h2>What Our Customer Say</h2>
        <div className="button">
            <button className="btn">
                <FaArrowLeft />
            </button>
            <button className="btn">
                <FaArrowRight />
            </button>
        </div>
    </nav>
  )
}

export default TestimonialNav