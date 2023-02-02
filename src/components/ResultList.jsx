import React from 'react';
import style from "../CSS modules/User.module.css";

const ResultList = ({result, setToModal, setModalActive}) => {

    return (
        <div>
            <div>
                {
                    result.map(({
                                          department,
                                          lastLogonTimestamp,
                                          mail,
                                          name,
                                          telephone,
                                          computerName,
                                      })=>
                        <div className={style.table} >
                            <span
                                className={style.item}
                                style={{cursor: "pointer"}}
                                onClick={(event) => {
                                    setToModal(event.target.textContent)
                                    setModalActive(true)

                                }}
                            >{name}</span>
                            <span className={style.item}>{telephone}</span>
                            <span className={style.item}>{mail}</span>
                            <span className={style.item}>{department}</span>
                            <span className={style.item}>{lastLogonTimestamp}</span>
                            <span
                                className={style.item}
                                style={{cursor: "pointer"}}
                                onClick={(event) => {
                                    setToModal(event.target.textContent);
                                    setModalActive(true);
                                }}
                            >{computerName}</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ResultList;