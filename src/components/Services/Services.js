import React from 'react';
import '../Services/Services.css';
import { useHistory} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
const Services = (props) => {
let history = useHistory();
const {serviceName , servicePrice ,_id , serviceImage  } = props.service;


    const handleClick = (id) =>  {
            console.log(id)
            history.push(`/checkout/${id}`)
    }


    return (
        <>


      <div className="items_box" id='#services'>
          
            {
                <Zoom>
                <div className="item" >
                   <img src={serviceImage} alt='' width="80%" height="200px" />
                    <h4>{serviceName}</h4>
                    <h3>Price : {servicePrice}</h3>
                    <button className="home_btn" onClick={() => handleClick(_id)} style={{paddingLeft:'2px' , paddingRight:'2px'}}>Order Now</button>
                </div>
                </Zoom>
}

</div> 
</>
    );
};

export default Services;

