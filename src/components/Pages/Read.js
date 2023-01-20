import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Read = () => {
    
    const comments = useLoaderData()

    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                comments.map(comment => <div className='border p-5 shadow-xl' key={comment._id} comment={comment}>
                    <h1>User Name : {comment.username}</h1>
                    <h1>Comments : {comment.comment}</h1>
                    <h1>Email: {comment.email}</h1>
                    <h1>Address : {comment.address}</h1>
                </div>)
            }
        </div>
    );
};

export default Read;