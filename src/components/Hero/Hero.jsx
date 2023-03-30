import React from 'react'
import classes from './hero.module.scss';
import Container from '../../shared/layout/container/Container';
import HeroText from './HeroText';
function Hero({children}) {
  return (
    
    <header className={classes.hero}>
        {children}
    <Container className={classes['snap-left']}>
        <HeroText/>
        </Container>
    </header>
  )
}

export default Hero