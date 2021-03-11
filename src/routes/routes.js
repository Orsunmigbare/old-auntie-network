import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LoginComponent from '../views/LoginPage/index';
import RegisterComponent from '../views/RegisterPage/index';
import { Verify, Verify4digit } from '../views/Verify';

export default function UiRoute() {
    return (<
        BrowserRouter >
        <Switch>
            <Route exact path="/" component={RegisterComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/verify" component={Verify} />
            <Route path="/verify4digit" component={Verify4digit} />
        </Switch>
    </BrowserRouter>

    );
}