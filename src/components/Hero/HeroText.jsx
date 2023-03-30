import React from "react";
import Button from "../../shared/buttons/Button";
import Label from "../../shared/label/Label";
import classes from './herotext.module.scss';
function HeroText() {
  return (
    <article className={classes['hero']}>
      <Label>logistics & supply chain solutions</Label>
      <h1>Your Gateway to any Destination in the World</h1>
      <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
      <Button className={classes.primary}>Explore More</Button>
    </article>
  );
}

export default HeroText;
