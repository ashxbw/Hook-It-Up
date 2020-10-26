import React from 'react';
import Globe from '../assets/redglobe.gif'



const Home = () => {

    return (
        <>
            <div class="d-flex justify-content-center">
                <h1 class="text ">Hook it Up!</h1></div>
            <div class="d-flex justify-content-center">
                <h6 class="card-subtitle mb-2 text-muted">A user wiki directory made with React Hooks.</h6>
            </div>
            <div class="d-flex justify-content-center "><img src={Globe} alt="Red Spinning Globe" /></div>
        </>)


}

export default Home;