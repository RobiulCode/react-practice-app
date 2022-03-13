import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './src/component/CountryDetails/CountryDetails';
import ErrorPage from './src/component/ErrorPage/ErrorPage';
import Home from './src/component/Home/Home';

const CountryApp = () => {
    
    return (
        <div className='bg-gray-300'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/country/:id' element={<CountryDetails></CountryDetails>}></Route>
                <Route path='*' element={<ErrorPage/>}></Route>
            </Routes>
        </div>
    );
};

export default CountryApp;