import React, { useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { UserContext } from '../../../App';
const Navbar = () => {

  const  [loggedInUser] = useContext (UserContext);

  const reLoadPage = () => {
    window.location.reload(true);
}
  
    return (
        <>
        <div className="container mt-4">
        <nav class="navbar navbar-expand-lg navbar-light ">
 <Link to='/home' style={{textDecoration:'none' , color:'white' , fontSize:'25px' }}>DIGIRANK</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item active ">
      <Link to='' style={{textDecoration:'none' , color:'white' , fontWeight:'600' ,  marginRight:'35px' }}> Home</Link>
      </li>
      <li class="nav-item">
      <Link to='' style={{textDecoration:'none' , color:'white' , fontWeight:'600' ,  marginRight:'35px' }}>Services</Link>
      </li>
      <li class="nav-item">
      <Link to='' style={{textDecoration:'none' , color:'white' , fontWeight:'600' ,  marginRight:'35px' }}> Blog</Link>
      </li> 
       <li class="nav-item">
         <Link to='/admin' style={{textDecoration:'none' , color:'white' , fontWeight:'600' ,  marginRight:'35px'}}>Dashboard</Link>
      </li> 
      <li class="nav-item">
      <Link to='' style={{textDecoration:'none' , color:'white' , fontWeight:'600' ,  marginRight:'35px' }}> About</Link>
      </li> 
       <li class="nav-item">
       <Link to='' style={{textDecoration:'none' , color:'white' , fontWeight:'600' ,  marginRight:'35px' }}> Contact us</Link>
      </li>
      <li class="nav-item">
   
     {loggedInUser.useremail ? <button className="home_btn ms-5"><Link to='/login' style={{textDecoration:'none' , color:'white'}} onClick={() => reLoadPage()}>Log Out</Link></button> : <button className="home_btn ms-5"><Link to='/login' style={{textDecoration:'none' , color:'white'}}>Login</Link></button>  }
      </li>
    </ul>
  </div>
</nav>
      </div>
</>
    );
};

export default Navbar;

