import React from 'react';
import "./Button.module.css";

const Button = (props) => {
  console.log("Button is Running");
  return (
    <button
      type={props.type || 'button'}
      className={`button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};


//react memo for avoid re-evaluated components if component not change
export default React.memo(Button);
