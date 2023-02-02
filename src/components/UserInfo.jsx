import React from 'react';
import style from '../CSS modules/UserInfo.module.css'

const UserInfo = ({user}) => {
    return (
        <div className={style.UserInfo}>

            <label className={style.label} style={{fontWeight: 700}}>Имя:  </label>
            <div className={style.info}>
                {user.name}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Учетная запись:  </label>
            <div className={style.info}>
                {user.samAccountName}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Компания:  </label>
            <div className={style.info}>

                    {user.company}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Подразделение:  </label>
            <div className={style.info}>
                {user.department}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Адрес электронной почты:  </label>
            <div className={style.info}>
                {user.mail}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Номер телефона:  </label>
            <div className={style.info}>
                {user.telephone}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Должность:  </label>
            <div className={style.info}>
                {user.title}
            </div>
            <label className={style.label} style={{fontWeight: 700}}>Руководитель:  </label>
            <div className={style.info}>
                {user.manager.substring(3,user.manager.search(','))}
            </div>
        </div>


    );
};

export default UserInfo;