import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Delete = () => {

    const comments = useLoaderData();

    const handleDelete =(comment) => {

        fetch(`http://localhost:5000/usercomments/${comment._id}`, {
        method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                comments.map(comment => <div className='border p-5 shadow-xl flex flex-col justify-between' key={comment._id} comment={comment}>
                    <div>
                    <h1>User Name : {comment.username}</h1>
                    <h1>Comments : {comment.comment}</h1>
                    <h1>Email: {comment.email}</h1>
                    <h1>Address : {comment.address}</h1>
                    </div>
                    <div className='flex justify-center '>
                        <button onClick={() => handleDelete(comment)} className='w-1/4 bg-green-700 my-2 py-1 rounded'>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Delete;