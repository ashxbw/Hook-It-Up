import React, { useState, useEffect } from 'react';
import Cards from './cards';
import Globe from '../assets/redglobe.gif'

const Users = props => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        setUsers(users);

        console.log(users)

    }
    useEffect(() => {
        getUsers(users);

        return () => { }
    }, []);

    return (
        <>
            <div class="d-flex justify-content-center"><img src={Globe} alt="Red Spinning Globe" /></div>
            <h1 class="d-flex justify-content-center ">Users</h1>
            <div>
                {users.map(user => <Cards user={user} key={user.id} />)}
            </div>

        </>
    )
}

export default Users;