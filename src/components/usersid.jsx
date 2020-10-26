import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Users from './users';
import Globe from '../assets/redglobe.gif'

const UsersId = props => {

    const [userId, setUserId] = useState([]);

    const getUsersId = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        let userId = await res.json();
        setUserId(userId);
        console.log(userId)

    }
    useEffect(() => {
        getUsersId(userId);
        return () => { }
    }, []);

    return (
        <>
            <div class="d-flex justify-content-center"><img src={Globe} alt="Red Spinning Globe" /></div>
            <div class="d-flex justify-content-center">
                <h1>Users</h1></div>
            <div class="d-flex justify-content-center">
                <div class="card border-warning center mt-4 mb-3 w-25">
                    <div class="card-body text-center shadow-sm">

                        <h6 class="card-subtitle mb-3 mt-2 text-muted">{userId.name}</h6>
                        <p class="card-text">Phone Number:
                            <br></br>{userId.phone}</p>
                        <p class="card-text">Website: <br></br>{userId.website}</p>
                        <Link to={`/users/${userId.id}`}>
                            <Link to="/users">
                                <button class="btn btn-danger btn-outline-warning text-white shadow-sm" onClick={Users()}>Back to Users</button>
                            </Link>
                        </Link>



                    </div>
                </div>
            </div>

        </>
    )











}

export default UsersId;