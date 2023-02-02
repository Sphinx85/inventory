import React from 'react';
import style from "../../CSS modules/User.module.css";

const MySortButton = ( {onClick, value, name, setMenuVisible}) => {
    return (
        <button

            className={style.headerButtons}
            value={value}
            onClick={event => {
                onClick(event.target.value)
                setMenuVisible(false)
            }}
        >
            {name}
        </button>
    );
};

export default MySortButton;