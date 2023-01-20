import React from 'react';
import Header from '../components/Shared/Header';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <div className='sm:mx-20 mx-5'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;