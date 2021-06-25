import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddServices from '../AddServices/AddServices';
import Dashboard from '../Dashboard';
import Reviews from '../Reviews/Reviews'
import Order from '../Order/Order'
import Home from '../../Home/Home'
import ManageProduct from '../ManageProduct'
const Admin = () => {
    return (
        <Router>
            <Dashboard />
            <Switch>
                <Route path="/addServices">
                    <AddServices />
                </Route>
                <Route path="/review">
                    <Reviews />
                </Route>
                <Route path="/order">
                    <Order />
                </Route>
                <Route path="/manageService">
                    <ManageProduct />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
               
            </Switch>
        </Router>
    );
};

export default Admin;