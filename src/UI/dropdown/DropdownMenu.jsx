import { Button, Dropdown } from 'antd';
import style from "../../CSS modules/User.module.css";
import style2 from "../../CSS modules/Select.module.css";
import style3 from '../../CSS modules/MenuButton.module.css'
import MyButton from "../button/MyButton";
import React from "react";
import MySortButton from "../button/MySortButton";

const DropdownMenu = ({request, setVisibleMenu, usersCount}) => {
    const items = [
        {
            key: '1',
            label: (
                <MySortButton
                    name={'Все пользователи'}
                    value={"all"}
                    onClick={request}
                />
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            ),
        },
    ];

    return(
    <>
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomLeft"
            //overlayClassName={style.headerButtons}
            overlayStyle={{maxWidth:100}}
            arrow={{
                pointAtLeft: true,
            }}
        >

            <Button

            >
                {['Пользователи','(',usersCount,')'].join(' ')}
            </Button>
        </Dropdown>

    </>
);}
export default DropdownMenu;