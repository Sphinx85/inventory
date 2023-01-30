import React from "react";
import style from'../CSS modules/User.module.css'
import MyInput from "../UI/input/MyInput";
import ResultList from "./ResultList";
import SortButtons from "./SortButtons";

let User = (props) =>{

    return(
        <div className={style.content +' '+ style.main}>
            <span className={style.header}>
            <button className={style.headerButtons}>{'Пользователи ('+props.result.length+')' }</button>
            <button className={style.headerButtons}>Компьютеры</button>
            <MyInput
                value={props.value}
                setValue={props.setValue}
                request={props.request}
            />
            <button className={style.headerButtons}>Группы</button>
            </span>
            <div>
               <SortButtons sorted={props.sorted}/>
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