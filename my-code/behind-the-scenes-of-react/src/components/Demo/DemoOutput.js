import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput is Running");
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>;
};

//react memo for avoid re-evaluated components if component not change
export default React.memo(DemoOutput);
