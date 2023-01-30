import React from 'react';
import style from "../../CSS modules/User.module.css";

const MySortButton = ( {onClick, value, name}) => {
    return (
        <button
            className={style.headerButtons}
            value={value}
            onClick={event => onClick(event.target.value)}
        >
            {name}
        </button>
    );
};

export default MySortButton;