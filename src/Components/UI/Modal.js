import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const BackDrop = (props) =>{
    return(
        <div className={classes.backdrop} onClick={props.onClick}/>
    )
}

const OverLay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
    return(<Fragment>
        {ReactDOM.createPortal(<BackDrop onClick={props.onBackdropClick}/>, portalElement)}
        {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>, portalElement)}
    </Fragment>)
}

export default Modal;