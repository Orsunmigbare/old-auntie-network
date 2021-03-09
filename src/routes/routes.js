import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LoginComponent from '../views/LoginPage/index';
import RegisterComponent from '../views/RegisterPage/index';

export default function UiRoute() {
    return ( <
        BrowserRouter >
            <Switch>
                <Route exact path = "/" component = {RegisterComponent}/> 
                <Route path = "/login" component = {LoginComponent}/> 
            </Switch>  
        </BrowserRouter>

    );
}