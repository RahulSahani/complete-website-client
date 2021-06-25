import React, { useEffect, useState } from 'react';
import Services from './Services'
import './Services.css'
const ServiceDetail = () => {

    const [services , setServices] = useState([]);

useEffect(() => {
  fetch('https://digitalinc.herokuapp.com/services')
  .then(res => res.json())
  .then(data => {
    setServices(data)
  })
},[])
 console.log(services , 'all services list')
    return (
        <>
        <h1 className="text-center text-white">Services We Provide</h1>
        <p className="text-center text-white m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim unde deleniti sunt alias accusamus distinctio rerum laborum ex dolore. Vero!</p>
        <div className='service_container'>
            
           {
                services.map(service => <Services service={service}></Services>)
            }
            
           </div>
    </>  
    );
};

export default ServiceDetail;