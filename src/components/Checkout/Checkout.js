import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { UserContext } from '../../App';
const Checkout = () => {


const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    const {id} = useParams()
   console.log(loggedInUser)
   console.log(setLoggedInUser)
    console.log(id , 'Check')
 
    const [serviceData , setServiceData] = useState({})
    // console.log(serviceData._id , 'id')
    useEffect(() => {
        fetch(`https://digitalinc.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data , 'data')
          setServiceData(data)
          const newData = {...loggedInUser}
          newData.selectedService = data;
          setLoggedInUser(newData)
  console.log(newData , 'newdata')
        })
    },[id , loggedInUser , setLoggedInUser])

    return (
        <div>
            <h1>id: -{serviceData._id}</h1> 

          <button><Link to={'/shipment'}>Go to Shipping Page </Link></button> 
        </div>
    );
};

export default Checkout;