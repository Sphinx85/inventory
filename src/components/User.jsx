import React from "react";
import style from'../CSS modules/User.module.css'
import MyInput from "../UI/input/MyInput";
import ResultList from "./ResultList";
import SortButtons from "./SortButtons";
import MySelect from "../UI/select/MySelect";
import InfoModal from "./InfoModal";

let User = (props) =>{

    return(
        <div className={[style.content, style.main].join(' ')}>
            <InfoModal
                active={props.modalActive}
                setActive={props.setModalActive}
                modalContent={props.modalContent}
            />
            <span className={style.header}>

                <MySelect
                    request={props.userReq}
                    usersCount={props.result.length}
                    setVisibleMenu={props.setUserMenuActive}
                    visibleMenu={props.userMenuActive}
                />
                <button className={style.headerButtons}>Компьютеры</button>
                <MyInput
                    value={props.value}
                    setValue={props.setValue}
                    request={props.request}
                />
                <button
                    className={style.headerButtons}
                    onClick={()=> props.setModalActive(true)}
                >Группы</button>
            </span>
            <div>
               <SortButtons sorted={props.sorted}/>
                <hr/>
                {
                    props.result.length
                        ? <ResultList
                            result={props.result}
                            setToModal={props.toModalContent}
                            setModalActive={props.setModalActive}
                        />
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