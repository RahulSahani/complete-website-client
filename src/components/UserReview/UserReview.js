import React, { useEffect, useState } from 'react';

const UserReview = () => {
    const [review , setReview] = useState([])
    useEffect(() => {
        fetch('https://digitalinc.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    } ,[])
    console.log(review)
    return (
        <div>
            
        </div>
    );
};

export default UserReview;