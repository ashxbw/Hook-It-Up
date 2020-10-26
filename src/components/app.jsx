import React, { Fragment } from 'react';
import Home from './home';
import Users from './users'
import UsersId from './usersid'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';



const App = () => {

    return (

        <Router>
            <Fragment>


                <div class="d-flex justify-content-center" id="container">

                    <div class="mt-5 mb-5 mr-3">

                        <Link to="/"><button class="align-items-center btn btn-danger btn-outline-warning text-white shadow-sm">Go Home</button></Link>
                    </div>
                    <div class="mt-5 mb-5 mr-3">
                        <Link to="/Users"><button class="btn btn-danger btn-outline-warning text-white shadow-sm">View Users</button></Link>
                    </div>


                </div>



                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Users' component={Users} />
                    <Route exact path='/Users/:id' component={UsersId} />
                </Switch>



            </Fragment>




        </Router>


    )

}

export default App;