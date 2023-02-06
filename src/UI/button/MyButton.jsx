import React from 'react';
import style from "../../CSS modules/User.module.css";

const MyButton = ({value, name,visibleMenu,setVisibleMenu}) => {
    return (
        <button
            onMouseEnter={()=>
                    setVisibleMenu(true)
            }
            onClick={()=> {
                visibleMenu?
                    setVisibleMenu(false)
                    :
                    setVisibleMenu(true)
            }}
            className={style.headerButtons}
            value={value}
        >
            {name}
        </button>
    );
};

export default MyButton;