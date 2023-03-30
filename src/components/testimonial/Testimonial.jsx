import React from 'react'
import Label from '../../shared/label/Label';
import TestimonialNav from './TestimonialNav';
import Container from '../../shared/layout/container/Container';
import Card from '../../shared/layout/card/Card';
import TestimonialCard from './TestimonialCard';
import classes from './testimonial.module.scss';

const CUSTOMER_DATA =[{
    id: 0,
    name: 'John Smith',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    company: 'Fuel Company',
    testimonial:'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
},
{
    id: 1,
    name: 'Bola Tinubu',
    company: 'Town Hall',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxLu3Vm3zz9GITJDZp4Qt319_Bt0UoAYh9c3NTfqi8sKEJpfZJKuWDI6H9NFKrRh_T1Q&usqp=CAU',
    testimonial:'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
}]
function Testimonial() {

    const testimonial = CUSTOMER_DATA.map(data =>{
       return( <TestimonialCard
        key={data.id}
        image={data.image}
        testimonial={data.testimonial}
        company={data.company}
        name={data.name}
        />)
    })
  return (
    <main className={classes.testimonial}> 
        <Card>
        <Container>
        <Label>Testimonial</Label>
        <TestimonialNav/>
        <div className={classes.testimonials}>
        {testimonial}
        </div>
        </Container>
        </Card>
    </main>
  )
}

export default Testimonial