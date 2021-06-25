import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const Reviews = () => {
    const [imageUrl, setImageUrl] = useState('');
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        const userReviews = {
            userName: data.userName,
            userDetail: data.userReview,
            userImage: imageUrl
        };
        // const inputData = document.getElementById('input_value');

        fetch(`https://digitalinc.herokuapp.com/userReviews`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReviews)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, 'this is result')
                // alert('Product Listed Successfully')
              

            })
            .then(error => {
                console.log('server Eror', error)
            })
    };

    const handleUploadImage = event => {
        //   console.log(event.target.files[0] , 'working')
        const userImage = new FormData();

        userImage.set('key', 'cb51775660607bc9ab6c9011741ee0ad');

        userImage.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', userImage)
            .then(res => {
                setImageUrl(res.data.data.display_url)
                console.log(res.data.data.display_url)
            })
            .then(error => {
                console.log(error, 'Eror')
            })

    }
    return (
        <div className="container mt-5 bg-white p-5">
            <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 form-group">
                    <label>Your Name</label>
                    <input id='input_value'  className="mb-2 form-control" name="serviceName" placeholder="service Name"  {...register("userName")} /><br />
                </div>
                <div className="mb-4 form-group">
                    <label>Review</label>
                    <textarea id='input_value' className="mb-2 form-control" name="serviceDescription" placeholder="service Description" {...register("userReview", { required: true })} /><br />
                </div>
                <input id='input_value' className="mb-2 form-control" type="file" onChange={handleUploadImage} /><br />
                <input className="mb-2 form-control btn btn-primary" style={{ cursor: 'pointer' }} type="submit" />
            </form>
        </div>
    );
};

export default Reviews;