import React from 'react';
import style from'../../CSS modules/User.module.css'
const MySelect = ({defaultValue, onChange, value}) => {
    return (
        <select
            onChange={event => onChange(event.target.value )}
        >
            <option value='Пользователи' className={style.headerButtons}>{defaultValue}</option>
            <option value={value}>По возрастанию</option>
            <option value={value}>По убыванию</option>
        </select>
    );
};

export default MySelect;