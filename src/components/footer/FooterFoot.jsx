import React from "react";
import { Link } from "react-router-dom";
import classes from './footerfoot.module.scss';
import Card from "../../shared/layout/card/Card";
import Container from "../../shared/layout/container/Container";
function FooterFoot() {
  return (
    <footer className={classes.foot}>
        <Card>
        <Container>
      <p>copyright &copy; TransitFlow | 4dcub3 labs - powered by Nupat.</p>
      <ul>
        <li>
          <Link to="/">Style guide</Link>
        </li>
        <li>
          <Link to="/">Licenses</Link>
        </li>
        <li>
          <Link to="/">Changelog</Link>
        </li>
        <li>
          <Link to="/">password</Link>
        </li>
      </ul>
      </Container>
      </Card>
    </footer>
  );
}

export default FooterFoot;
