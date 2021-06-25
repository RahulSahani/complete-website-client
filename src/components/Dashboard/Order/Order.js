import React, { useEffect, useState } from 'react';

const Order = () => {
    
  const [orders , setOrders] = useState([]);


  useEffect(() =>{
        fetch('https://digitalinc.herokuapp.com/orderList')  
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data)
        })
  }, [])

    return (
        <div>
        {
            orders.map(order => <li>{order.selectedService.serviceName}</li>)
        }
        </div>
    );
};

export default Order;