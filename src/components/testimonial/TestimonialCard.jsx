import React from 'react'
import classes from './testimonialcard.module.scss';
import Card from '../../shared/layout/card/Card';
import {FaStar, FaQuoteRight} from 'react-icons/fa';
function TestimonialCard({name, company,testimonial, image}) {
  return (
    <Card className={classes['testimonials-card']}>
        <div className="customer">
        <figure>
            <div>
            <img src={image} alt="" />
            </div>
            <figcaption>
                <h3>{name}</h3>
                <p>{company}</p>
            </figcaption>
        </figure>
        <span>
          <FaQuoteRight/>
        </span>
        </div>

        <div className={classes['customer-testimonial']}>
            {testimonial}
        </div>

        <div className={classes['customer-rating']}>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        </div>
    </Card>
  )
}

export default TestimonialCard