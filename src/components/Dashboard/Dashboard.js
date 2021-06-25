import React from 'react';
import AddServices from './AddServices/AddServices'
import './Dashboard.css';
import {
    BrowserRouter as 
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Reviews from './Reviews/Reviews'
import Order from './Order/Order';
import ManageProduct from './ManageProduct/ManageProduct';
const Dashboard = () => {
    return (
        <div className="admin-container">
        <div className='container '>
            <div className="row d-flex">
                <div className="col-md-4">
<h1>Dashboard</h1>

<ul>
<li><Link style ={{textDecoration:'none' }} to="/admin/manageService">Manage Products</Link></li>
<li><Link style ={{textDecoration:'none' }} to = "/admin/addServices">Add Products</Link></li>
 <li><Link style ={{textDecoration:'none' }} to = "/admin/review">Reviews</Link></li>
 <li><Link style ={{textDecoration:'none'}} to = "/admin/order">Order</Link></li>
 <li><Link style ={{textDecoration:'none'}} to = "/">Home</Link></li>

</ul>
                </div>
                <div className="col-md-8"> 
                   <Switch>
                       <Route path="/admin/manageService">
                           <ManageProduct/>
                       </Route>
                       <Route path="/admin/addServices">
                            <AddServices/>
                       </Route>
                       <Route path="/admin/review">
                           <Reviews/>
                       </Route>
                       <Route path="/admin/order">
                           <Order/>
                       </Route>
                       <Route path="/admin/order/:orderId">
             <Order/>
                      </Route>
                   
                   </Switch>
                </div>
            </div>
            
        </div>

        </div>
    );
};

export default Dashboard;