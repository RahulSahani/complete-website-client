
import './App.css';
import  Home from './components/Home/Home.js'
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Navbar from './components/Home/Header/Navbar'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Shipment from './components/Shipment/Shipment'
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Navbar />
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout/>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment/>
            </PrivateRoute>
            <Route path="/">
              <Navbar />
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>

    </>
  );
}

export default App;
