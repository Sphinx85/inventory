import React, {useState} from 'react';
import style from'../../CSS modules/User.module.css'
import style2 from '../../CSS modules/Select.module.css'
import MySortButton from "../button/MySortButton";


const MySelect = ({request}) => {



    const [userMenu] = useState([
        {value: 'Все пользователи', request: "all"},
        {value: 'Индукерн', request: "/indukern"},
        {value: 'Велфарм', request: "/velpharm"},
        {value: 'Активные пользователи', request: "city"},]
    );
    return (



        <menu className={[style.headerButtons, style2.select].join(' ')}>
            {userMenu.map(
                button=><MySortButton onClick={request} value={button.request} name={button.value}/>
            )}
        </menu>
    );
};

export default MySelect;