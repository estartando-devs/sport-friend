import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';

export default function Routers() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
        </BrowserRouter>
    );
}