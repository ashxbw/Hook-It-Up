import React from 'react';
import { Link } from 'react-router-dom'



const Cards = (props) => {
    return (<React.Fragment><center><div class="card border-warning center shadow-sm mt-4 mb-3 w-25">
        <div class="card-body text-center shadow-sm">

            <h5 class="card-title mb-3">{props.user.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Username
            <br></br> @{props.user.username}</h6>
            <p class="card-text">Email: {props.user.email}</p>
            <Link to={`/users/${props.user.id}`}>
                <button class="btn btn-danger btn-outline-warning text-white shadow-sm">More Info</button>
            </Link>


        </div>
    </div></center></React.Fragment>

    )
}

export default Cards;
