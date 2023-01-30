import React from 'react';
import style from "../CSS modules/User.module.css";
import MySortButton from "../UI/button/MySortButton";

const SortButtons = ({sorted}) => {
    return (
        <div className={style.table}>
            <MySortButton
                onClick={sorted}
                value={'name'}
                name={'Фамилия Имя Отчество'}
            />
            <MySortButton
                onClick={sorted}
                value={'telephone'}
                name={'Номер телефона'}
            />
            <MySortButton
                onClick={sorted}
                value={'mail'}
                name={'Электронная почта'}
            />
            <MySortButton
                onClick={sorted}
                value={'department'}
                name={'Подразделение'}
            />
            <MySortButton
                onClick={sorted}
                value={'lastLogonTimestamp'}
                name={'Поледний вход в аккаунт'}
            />
            <MySortButton
                onClick={sorted}
                value={'computerName'}
                name={'Имя компьютера'}
            />
        </div>
    );
};

export default SortButtons;