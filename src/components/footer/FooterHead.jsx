import React from "react";
import Container from "../../shared/layout/container/Container";
import classes from "./footerhead.module.scss";
import logo from "../../store/images/Logo.png";
function FooterHead() {
  return (
    <footer className={classes['footer-head']}>
      <Container>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li>Pages</li>
          <li>Utility</li>
          <li>Subscribe</li>
        </ul>
      </Container>
    </footer>
  );
}

export default FooterHead;
