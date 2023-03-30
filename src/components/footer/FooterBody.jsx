import React from 'react'
import Card from '../../shared/layout/card/Card'
import Container from '../../shared/layout/container/Container';
import TransitFlow from './TransitFlow';
import classes from './footerbody.module.scss';
import Pages from './Pages';
import Utilities from './Utilities';
import Subscribe from './Subscribe';
function FooterBody() {
  return (
    <Card className={classes['footer-body']}>
        <Container>
            <TransitFlow />
            <Pages />
            <Utilities />
            <Subscribe />
        </Container>
    </Card>
  )
}

export default FooterBody