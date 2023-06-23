import React from "react";
import classes from "./Input.module.css";

//this React.forwardRef for make useref in this custom component work
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
