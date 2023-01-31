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

    let toModalContent = (current) =>{
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

    function resultUsersFromRequest(usersArray, computersArray){

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

        usersArray.forEach(user =>{
            computersArray.forEach(computer=>{
                if (computer.managedBy.includes(user.name)){
                    pushToArray(user,computer)
                }

            })
        })
        if (array.length === 0){
            usersArray.forEach(user=>pushToArray(user,{name: 'Не найдено'}))

            return array
        } else return array


    }

    let instance = axios.create({
        baseURL: 'http://140-it/'
    });

    let instance1 = axios.create({
        baseURL: 'http://140-it/users'
    });

    let request = (requestText) => {
        instance
            .get(requestText)
            .then(response => {
                setUsers(response.data[0]);
                setComputers(response.data[1]);
                setResult(resultUsersFromRequest(users, computers))
                //setValue(requestText)

            })
    }

    let request1 = (requestText) => {
        instance1
            .get(requestText)
            .then(response=>{
                setResult(resultUsersFromRequest(response.data,computers))
                setUsers(response.data)
            })
    }

    const sortList = (sort) => {
        console.log(sort+'!')
        setResult([...result].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return(
            <User

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
                userReq={request1}



            />
    )


}

export default UserContainer;