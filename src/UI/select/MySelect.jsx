import React, {useState} from 'react';
import style from'../../CSS modules/User.module.css'
import style2 from '../../CSS modules/Select.module.css'
import MySortButton from "../button/MySortButton";
import MyButton from "../button/MyButton";


const MySelect = ({request, visibleMenu, setVisibleMenu, usersCount}) => {



    const [userMenu] = useState([
        {value: 'Все пользователи', request: "all"},
        {value: 'Индукерн', request: "/indukern"},
        {value: 'Велфарм', request: "/velpharm"},
        {value: 'Активные пользователи', request: "active"},
        {value: 'Неактивные более 30 дней', request: "inactive"},
        {value: 'Отключенные пользователи', request: "disabled"},
        {value: 'Сити', request: "city"},
        {value: 'Апрелевка', request: "apr"},
        {value: 'Зеленоград', request: "zel"},
        ]
    );
    return (
        <div>
            <MyButton

                visibleMenu={visibleMenu}
                setVisibleMenu={setVisibleMenu}
                className={style.headerButtons}
                name={['Пользователи','(',usersCount,')'].join(' ')}
            />
            <div className={visibleMenu?
                [style2.menuBlock, style2.menuBlock_active].join(' '):
                style2.menuBlock}
                 onMouseLeave={()=>setVisibleMenu(false)}
            >
                {
                    userMenu.map(item=>
                        <div
                            key={item.value}
                            style={{marginTop: 3}}

                        >
                            <MySortButton
                                setMenuVisible={setVisibleMenu}
                                name={item.value}
                                value={item.request}
                                onClick={request}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MySelect;