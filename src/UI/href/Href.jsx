import React from 'react';
import style from "../../CSS modules/User.module.css";
const Href = ({mail}) => {
    return (
        <a href={'mailto:'+mail} className={style.item}>
            {mail}
        </a>
    );
};

export default Href;