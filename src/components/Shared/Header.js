import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='sm:flex justify-between items-center mb-10'>
            <div className='w-1/5'>
                <h1 className='text-xl font-semibold text-green-700'>MongoCrud</h1>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-around  w-4/5'>
            
            <Link to='/create'>Create</Link>
            <Link to='/read'>Read</Link>
            <Link to='/update'>Update</Link>
            <Link to='/delete'>Delete</Link>
            
            </div>
        </div>
    );
};

export default Header;