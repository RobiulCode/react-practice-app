import React from 'react';

const CountryDetails = ({title,img,population,capital,region}) => {
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img src={img} alt={title} className=" rounded-tl-lg rounded-tr-lg"/>
            <div className="p-4">
                <h3 className="font-bold">{title}</h3>
                <p className="text-xs">Population:<span className="text-gray-700 dark:text-gray-300">{population}</span></p>
                <p className="text-xs">Capital:<span className="text-gray-700 dark:text-gray-300">{capital}</span></p>
                <p className="text-xs">Region:<span className="text-gray-700 dark:text-gray-300">{region}</span></p>
            </div>
        </div>
    );
};

export default CountryDetails;