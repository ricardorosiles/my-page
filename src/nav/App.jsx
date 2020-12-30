import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from '../pages/home/HomePage';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="*" component={HomePage} />

            </Switch>
        </Router>
    )
}
