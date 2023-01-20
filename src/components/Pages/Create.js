import React, {useState} from 'react';

const Create = () => {

    // useState to store the user and setUser 

    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        // here we are using fetch to sent all the data to the node server 
       
        fetch('http://localhost:5000/comments',  {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        e.reset()
    }

    // here we are geting all the values by using onBlur 

    const handleBlur = (e) => {
        const field = e.target.name;
        const userValue = e.target.value;

        const newUser = {...user};
        newUser[field] = userValue;
        setUser(newUser)
        console.log(newUser);

    }



    return (
        <form onSubmit={handleSubmit} className='lg:w-1/2 bg-gray-400 sm:p-20 p-5'>
            <div>
                <h1>Username</h1>
                <input onBlur={handleBlur} className='bg-gray-400 border rounded w-full md:w-2/3' type="text" name="username" id="" />
                <h1>Email</h1>
                <input onBlur={handleBlur} className='bg-gray-400 border rounded w-full sm:w-2/3' type="email" name="email" id="" />
                <h1>Comment</h1>
                <input onBlur={handleBlur} className='h-28 bg-gray-400 border rounded w-full sm:w-2/3' type="comment" name="comment" id="" />
                <h1>Address</h1>
                <input onBlur={handleBlur} className='bg-gray-400 border rounded w-full sm:w-2/3' type="text" name="address" id="" />
            </div>
            <div className='flex justify-center my-5'>
                <button className='w-1/3 bg-blue-900 py-1 text-white border rounded-xl'>Submit</button>
            </div>
        </form>
    );
};

export default Create;