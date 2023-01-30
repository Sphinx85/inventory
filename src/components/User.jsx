import React from "react";
import style from'../CSS modules/User.module.css'
import MyInput from "../UI/input/MyInput";
import ResultList from "./ResultList";

let User = (props) =>{

    return(
        <div className={style.content +' '+ style.main}>
            <span className={style.header}>
            <button className={style.headerButtons}>Пользователи</button>
            <button className={style.headerButtons}>Компьютеры</button>
            <MyInput
                value={props.value}
                setValue={props.setValue}
                request={props.request}
            />
            <button className={style.headerButtons}>Группы</button>
            </span>
            <div>
                <div className={style.table}>

                    <span className={style.headerTable}>Фамилия Имя Отчество</span>
                    <span className={style.headerTable}>Номер телефона</span>
                    <span className={style.headerTable}>Электронная почта</span>
                    <span className={style.headerTable}>Подразделение</span>
                    <span className={style.headerTable}>Поледний вход в аккаунт</span>
                    <span className={style.headerTable}>Имя компьютера</span>
                </div>
                <hr/>
                {
                    props.result.length
                        ? <ResultList result={props.result} />
                        : <div style={{
                            textAlign: 'center',
                            fontSize: 20,
                            color: "rosybrown"

                        }}>Результаты не найдены</div>
                }


            </div>
        </div>
    )
}

export default User;