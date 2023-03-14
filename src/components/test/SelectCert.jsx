import React from 'react';

import {useMemo, useState} from "react";
import ccpa from "crypto-pro-cadesplugin";


const useDoCertsList = () =>
    useMemo(async () => {
        const certsApi = await ccpa();
        const certsList = await certsApi.getCertsList();

        function getty (){
            certsApi.about()
        }
        getty();


        const list = certsList.map(({subjectInfo, thumbprint}) => ({
            value: thumbprint,
            label: subjectInfo
        }));
        return list;
    }, []);



const SelectCert = () => {
    const [listSert, setListSert] = useState([{value: "подпись", label: "подпись"}]);

    useDoCertsList()
        .then(setListSert)

    return (
        <label>
            <select name="thumbprint" >
                {
                    listSert.map(item => (
                        <option value={item.value} selected>{item.label}</option>
                    ))
                }
            </select>
            Выберите сертификат
            <div>
                {}
            </div>
        </label>
    );
};

export default SelectCert;