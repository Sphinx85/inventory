import React from 'react';
import style from '../CSS modules/InfoModal.module.css'
import UserInfo from "./UserInfo";
import ComputerInfo from "./ComputerInfo";

const InfoModal = ({active, setActive, children, modalContent}) => {
    return (
        <div
            className={active ? [style.modal,style.active].join(' ') : style.modal}
            onClick={()=>setActive(false)}>
            <div
                className={active ? [style.modalContent,style.activeC].join(' ') : style.modal}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                {
                    Object.keys(modalContent).length > 13 ?
                        <UserInfo user={modalContent}/>:
                        <ComputerInfo computer={modalContent}/>
                }
            </div>
        </div>
    );
};

export default InfoModal;