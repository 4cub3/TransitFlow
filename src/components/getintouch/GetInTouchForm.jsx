import React from "react";
import Button from "../../shared/buttons/Button";
import classes from './getintouchform.module.scss';
function GetInTouchForm() {
  return (
    <form className={classes['form-main']}>
      <div className={classes['form-control']}>
        <input type="text" name="" id="" placeholder="Your name*" required/>
        <input type="text" name="" id="" placeholder="Email*" required/>
        <input type="text" name="" id="" placeholder="Your phone*" required/>
        <input type="text" name="" id="" placeholder="City*" required/>
      </div>
      <textarea name="" id="" cols="30" rows="10" placeholder="Your message*" required></textarea>
      <Button className={classes.primary}>Submit message</Button>
    </form>
  );
}

export default GetInTouchForm;
