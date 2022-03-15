import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const{name:{common},population,flags:{png},capital,ccn3}=country

    return (
        <div className="bg-gray-100 rounded shadow-md shadow-blue-400/50 p-2 mb-2">
            <div className='space-y-2'>
                <div className="flex justify-center">
                    <img src={png} alt=""  className='h-44 md:h-52 w-full'/>
                </div>
                <div className=" ml-3">
                    <p>Name : {common}</p>
                    <p>Total Population : {population} </p>
                    <p>Capital : {capital}</p>
                   <Link to={`/country/${ccn3}`}>
                        <button className='border py px-4 border-blue-500 rounded hover:bg-blue-400 hover:text-white duration 500'>Get Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Country;