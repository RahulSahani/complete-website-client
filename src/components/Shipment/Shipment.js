import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'

import { UserContext } from '../../App';
const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit,   } = useForm();
    const onSubmit = data => {
        const newData = { ...loggedInUser }
        newData.shipmentInfo = data;
        newData.status = 'pending';
        setLoggedInUser(newData)
        if (loggedInUser.shipmentInfo) {
            fetch(`https://digitalinc.herokuapp.com/order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loggedInUser)     
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('Your Order Has been Placed')
                }
            })

        }
        };

        console.log(loggedInUser)

        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder=" Enter Your Name" {...register("name", { required: true })} /><br />
                    <input placeholder=" email" {...register("email", { required: true })} /><br />
                    <input placeholder=" adderss" {...register("address", { required: true })} /><br />

                    <input type="submit" />
                </form>
            </div>
        );
    };

    export default Shipment;