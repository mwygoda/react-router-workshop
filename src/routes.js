import React from 'react';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Other from './components/Other'
import Logout from './components/Logout'
import WithAutorization from './WithAutorization';
import { Route } from 'react-router-dom';

export default (
    <div>
        <Navbar />
        <Route exact path="/" component={WithAutorization(Main)}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/other" component={WithAutorization(Other)} />
        <Route exact path="/logout" component={WithAutorization(Logout)} />
    </div>
);