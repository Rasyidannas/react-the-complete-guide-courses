import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return <Fragment>
    {/* this is protal for put element free like we want */}
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>;
};

export default Modal;
