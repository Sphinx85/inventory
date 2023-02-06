import React from 'react';
import style from "../../CSS modules/User.module.css";

const MyInput = ({value, setValue, request}) => {

    return (
        <input
            className={style.search + ' ' + style.headerButtons}
            onChange={event => {
                setValue(event.target.value)
                request(event.target.value)
            }}
            type={'text'}
            placeholder={'Поиск...'}
            value={value}
        />
    );
};

export default MyInput;