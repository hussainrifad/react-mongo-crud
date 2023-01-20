import React from 'react';
import {useLoaderData, Link} from 'react-router-dom';


const Update = () => {

    const comments = useLoaderData()

    return (
        <div>
            <div>
                <div className='grid grid-cols-3 gap-3'>
            {
                comments.map(comment => <div className='border p-5 shadow-xl flex flex-col ' key={comment._id} comment={comment}>
                   <div>
                     <h1>User Name : {comment.username}</h1>
                    <h1>Comments : {comment.comment}</h1>
                    <h1>Email: {comment.email}</h1>
                    <h1>Address : {comment.address}</h1>
                   </div>
                   <div className=''>
                    <Link to={`/update/${comment._id}`}><button className='w-1/4 bg-blue-700 rounded text-white py-1  my-3 '>update</button></Link>
                   </div>

                </div>)
            }
        </div>
            </div>
           
        </div>
       
    );
};

export default Update;