import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {

    const [imageUrl, setImageUrl] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceDetails = {
            serviceName: data.serviceName,
            serviceDetail: data.serviceDetail,
            servicePrice: ` $${data.price}`,
            serviceImage: imageUrl
        };
      

        fetch(`https://digitalinc.herokuapp.com/addServices`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceDetails)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, 'this is result')
                alert('Product Listed Successfully')


            })
            .then(error => {
                console.log('server Eror', error)
            })
    };

    const handleUploadImage = event => {
        //   console.log(event.target.files[0] , 'working')
        const serviceimageData = new FormData();

        serviceimageData.set('key', 'cb51775660607bc9ab6c9011741ee0ad');

        serviceimageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', serviceimageData)
            .then(res => {
                setImageUrl(res.data.data.display_url)
                console.log(res.data.data.display_url)
            })
            .then(error => {
                console.log(error, 'Eror')
            })

    }
    return (
        <div className="container mt-5">
            <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 form-group">
                    <label>Service Name</label>
                    <input id='input_value' className="mb-2 form-control" name="serviceName" placeholder="service Name"  {...register("serviceName")} /><br />
                </div>
                <div className="mb-4 form-group">
                    <label> Product Description</label>
                    <input id='input_value' className="mb-2 form-control" name="serviceDescription" placeholder="service Description" {...register("serviceDetail", { required: true })} /><br />
                </div>
                <div className="mb-4 form-group">
                    <label> Product Price</label>
                    <input id='input_value' className="mb-2 form-control" name="servicePrice" type="text" placeholder="price" {...register("price")} /><br />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <input id='input_value' className="mb-2 form-control" type="file" onChange={handleUploadImage} /><br />
                <input className="mb-2 form-control btn btn-primary" style={{ cursor: 'pointer' }} type="submit" />
            </form>
        </div>
    );
};

export default AddServices;