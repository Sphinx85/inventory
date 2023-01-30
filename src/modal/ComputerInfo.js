import React from "react";
import {Modal, Button} from 'react-bootstrap';
import style from '../CSS modules/InfoModal.module.css'

let ComputerInfo = (props) => {


    const handleClose = () => props.show = false;
    const handleShow = () => props.show = true;
    return(



        <Modal
            show={props.show}
            className={style.modal}

            >
            <Modal.Dialog >
                <div >
                    "Test"
                </div>
                <button onClick={handleClose}>Close</button>
            </Modal.Dialog>
        </Modal>

    )
}

export default ComputerInfo;