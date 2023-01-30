import User from "../components/User";
import React, {useState} from "react";
import axios from 'axios'

let UserContainer = () => {

    const [users, setUsers] = useState([])
    const [computers, setComputers] = useState([])
    const [result, setResult] = useState([])
    const [value, setValue] = useState('')



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

    let request = (requestText) => {
        instance
            .get(requestText + '     ')
            .then(response => {
                setUsers(response.data[0]);
                setComputers(response.data[1]);
                setResult(resultUsersFromRequest(users, computers))
                //setValue(requestText)
                console.log(users)
                console.log(computers)
            })
    }

    const sortList = (sort) => {
        console.log(sort+'!')
        setResult([...result].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return(
            <User
                request={request}
                value={value}
                setValue={setValue}
                users={users}
                computers={computers}
                result={result}
                sorted={sortList}



            />
    )
        
  
}

export default UserContainer;