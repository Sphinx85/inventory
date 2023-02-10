import User from "../components/User";
import React, {useState} from "react";
import axios from 'axios'

let UserContainer = () => {

    const [users, setUsers] = useState([])
    const [computers, setComputers] = useState([])
    const [result, setResult] = useState([])
    const [value, setValue] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [modalContent, setModalContent] = useState({})
    const [userMenuActive, setUserMenuActive] = useState(false)

    let toModalContent = (current) =>{
        if (current==="Не найдено"){
            setModalContent({name: 'Не найдено'})
            return
        }
        users.forEach((user)=>{
            if (user.name.includes(current)){
                setModalContent(user)
            }
        })
        computers.forEach((computer)=>{
            if (computer.name.includes(current)){
                setModalContent(computer)
            }
        })
    }

    function resultUsersFromRequestNew([users,computers]){

        let array = []

        function pushToArray(user,computer){
            array.push({
                name: user.name,
                telephone: user.telephone,
                mail: user.mail,
                computerName: computer.name,
                department: user.department,
                lastLogonTimestamp: user.lastLogonTimestamp
            })
        }

        users.forEach(user =>{
            let count = array.length
            computers.forEach(computer=>{
                if (computer.managedBy.includes(user.name)){
                    pushToArray(user,computer)
                }
            })
            if (count===array.length){
                pushToArray(user,{name: "Не найдено"})
            }
        })
        setResult(array)
    }

    let dataAuth = {
        client_secret: '3debeeba-8565-414d-bf6c-eb79a1a06853',
        client_id: 'b5cc8c47-c2c2-4a66-af6b-625a5721929e',
        user_id: 'D66D970E393ACD6833CE7879BCF73F8AD184F349',
        auth_type: 'SIGNED_CODE'
    }

    let key = {}

    let baseUrl = 'https://api.mdlp.crpt.ru/api/v1/auth'
    let auth = axios.create({
        method: "POST",
        //data: dataAuth,
        //headers:{"Content-Type":"application/json"},

    })
    let doc = axios.create({
        baseURL: 'https://api.mdlp.crpt.ru/api/v1/documents/get_size'
    })



    let  zznak = async () => {
        await fetch('https://api.mdlp.crpt.ru/api/v1/auth',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json, text/plain, */*'},
            body: JSON.stringify({
                client_secret: '3debeeba-8565-414d-bf6c-eb79a1a06853',
                client_id: 'b5cc8c47-c2c2-4a66-af6b-625a5721929e',
                user_id: 'D66D970E393ACD6833CE7879BCF73F8AD184F349',
                auth_type: 'PASSWORD'
            })
        }).then(res=>console.log(res.json())).then(data=>console.log(data))
    }
    //этот под этим
    /*fetch('https://api.mdlp.crpt.ru/api/v1/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({client_secret: '3debeeba-8565-414d-bf6c-eb79a1a06853', client_id: 'b5cc8c47-c2c2-4a66-af6b-625a5721929e', user_id: 'D66D970E393ACD6833CE7879BCF73F8AD184F349', auth_type: 'SIGNED_CODE'})
    }).then(res=>console.log(res))*/

    /*let zznak = () => {
        fetch(baseUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dataAuth)
        }).then(response=>console.log(response))

    }*/

    let z2znak = axios.create({
        //baseURL: {baseUrl},
        //method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        //data: dataAuth,
    })

    let znak = axios.create({
        //baseURL: 'https://markirovka.sandbox.crptech.ru/api/v3/true-api/',
        //baseURL: 'https://markirovka.sandbox.crptech.ru/api/v3/true-api/',
        baseURL: 'https://api.mdlp.crpt.ru/api/v1/',
        /*accept: 'application/json',
        host: 'markirovka.sandbox.crptech.ru',
        contentType: 'application/json',*/
        data: {
            'client_secret': '3debeeba-8565-414d-bf6c-eb79a1a06853',
            'client_id': 'b5cc8c47-c2c2-4a66-af6b-625a5721929e',
            'user_id': 'D66D970E393ACD6833CE7879BCF73F8AD184F349',
            'auth_type': 'SIGNED_CODE'
        },

        headers: {
            //Authorization: 'token 13b5b046-0cd7-4e1c-8409-da9541986d1c',
            //Referer:'brightway.ry',
            //vary: 'origin',
            //origin:'mx.c-inv.ru'
            //'Access-Control-Allow-Origin' : '*',
            //"Access-Control-Allow-Credentials" : "true",
            //'Access-Control-Allow-Methods': '*',
            //'Access-Control-Allow-Headers': '*',
            "Content-Type" : "application/json",

            //'Origin':'brightway.ru'
        }
    })

    let instanceBase = axios.create({
        baseURL: 'http://140-it:88/'
    });

    let instanceUser = axios.create({
        baseURL: 'http://140-it:88/users'
    });

    let instanceComputer = axios.create({
        baseURL: 'http://140-it:88/computers'
    });

    let zkaker = (text) =>{
        znak.post(text, {
            client_secret: '3debeeba-8565-414d-bf6c-eb79a1a06853',
            client_id: 'b5cc8c47-c2c2-4a66-af6b-625a5721929e',
            user_id: 'D66D970E393ACD6833CE7879BCF73F8AD184F349',
            auth_type: 'SIGNED_CODE'
        })
            .then(response=>console.log(response.data))
            .catch(reason => alert(reason))
    }

    let request = (requestText) => {
        instanceBase
            .get(requestText)
            .then(response=>{
                resultUsersFromRequestNew(response.data)
                setUsers(response.data[0])
                setComputers(response.data[1])
            })
    }

    let requestComputerMenuItems = (requestText)=>{
        instanceComputer
            .get(requestText)
            .then(response=>setComputers(response.data))
    }

    let requestUserMenuItems = (requestText) => {
        instanceUser
            .get(requestText)
            .then(response=>{
                resultUsersFromRequestNew(response.data)
                setUsers(response.data[0])
                setComputers(response.data[1])
            })
    }

    const sortList = (sort) => {
        console.log(sort+'!')
        setResult([...result].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return(
            <User
                znak={zznak}

                userMenuActive={userMenuActive}
                setUserMenuActive={setUserMenuActive}
                modalContent={modalContent}
                toModalContent={toModalContent}
                request={request}
                modalActive={modalActive}
                setModalActive={setModalActive}
                value={value}
                setValue={setValue}
                users={users}
                computers={computers}
                result={result}
                sorted={sortList}
                userReq={requestUserMenuItems}
            />
    )
}

export default UserContainer;