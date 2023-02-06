import React from 'react';
import style from "../CSS modules/UserInfo.module.css";


const ComputerInfo = ({computer}) => {
    return (
        <div className={style.UserInfo}>
            <label className={style.label} style={{fontWeight: 700}}>Имя компьютера:  </label>
            <div className={style.info}>
                {computer.name}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Версия сборки:  </label>
            <div className={style.info}>
                {computer.build}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Операционная система:  </label>
            <div className={style.info}>

                {computer.os}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>IP адрес:  </label>
            <div className={style.info}>
                {computer.ip}
            </div>

        </div>
    );
};

export default ComputerInfo;