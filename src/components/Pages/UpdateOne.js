import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'

const UpdateOne = () => {

    const comment = useLoaderData();
    const [updatedComment, setUpdatedComment] = useState(comment)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(updatedComment);

        fetch(`http://localhost:5000/comments/${updatedComment._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedComment)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleBlur = (e) => {
        const form = e.target;
        const field = form.name;
        const value = form.value;
        const newUpdatedcomment = {...updatedComment};
        newUpdatedcomment[field] = value;
        setUpdatedComment(newUpdatedcomment);
    }

    return (
         <div>
                 <form onSubmit={handleSubmit} className='bg-gray-400 sm:p-20 p-5'>
            <div>
                <h1>Username</h1>
                <input onBlur={handleBlur} className='bg-gray-400 border rounded w-full sm:w-2/4' defaultValue={comment.username} type="text" name="username" id="" />
                <h1>Email</h1>
                <input onBlur={handleBlur} className='bg-gray-400 border rounded w-full sm:w-2/4' type="email" defaultValue={comment.email} name="email" id="" />
                <h1>Comment</h1>
                <input onBlur={handleBlur} className='h-28 bg-gray-400 border rounded w-full sm:w-2/4' defaultValue={comment.comment} type="comment" name="comment" id="" />
                <h1>Address</h1>
                <input onBlur={handleBlur} className='bg-gray-400 border rounded w-full sm:w-2/4' defaultValue={comment.address} type="text" name="address" id="" />
            </div>
            <div className='flex justify-center my-5'>
                <button className='w-1/3 bg-blue-900 py-1 text-white border rounded-xl'>Update</button>
            </div>
        </form>
            </div>
    );
};

export default UpdateOne;