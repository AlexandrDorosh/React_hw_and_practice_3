import './Users.css';
import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
    }, []);
    return(
        <div>
            <h1>Users</h1>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    )
}