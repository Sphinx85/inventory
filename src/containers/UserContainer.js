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

    let instanceBase = axios.create({
        baseURL: 'http://140-it:88/'
    });

    let instanceUser = axios.create({
        baseURL: 'http://140-it:88/users'
    });

    let instanceComputer = axios.create({
        baseURL: 'http://140-it:88/computers'
    });

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