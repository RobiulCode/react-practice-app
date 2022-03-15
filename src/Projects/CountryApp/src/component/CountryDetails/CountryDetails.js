import axios from 'axios';
import React,{ useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";

const CountryDetails = () => {
    const {id}= useParams()
    const [country,setCountry] = useState([])

    useEffect(()=>{
        getCountry()
        .catch(error=> console.log(error))

    },[])
    const getCountry=async()=> {
        const data = await axios('https://restcountries.com/v3.1/all')
        const searchCountry = data.data.filter(country => country.ccn3 === id)
        setCountry(searchCountry)
    }
    const value = country.value
    return (
        <div className="">
            {
                value>0?
                <div className="">
                            {
                    country.map((country)=>
                    <div className="md:w-1/2 md:mx-auto bg-white p-4 shadow-md md:mt-6 m-2">
                        <img src={country.flags.png} alt='' className="rounded h-80 mx-auto"/>
                        <div className="p-4 mb-6 space-y-3">
                            <h3 className="font-bold text-2xl border py-2 px-4">{country.name.common}</h3>
                            <p className="border border-gray-300 py-2 px-4">Population: {country.population}</p>
                            <p className="border border-gray-300 py-2 px-4">Capital: {country.capital}</p>
                            <p className="border border-gray-300 py-2 px-4">Region: {country.region}</p>
                        </div>
                    </div>
                    )
                             }
                </div>
                :
                <div className="w-1/4 mx-auto mt-24 bg-gray-200 p-10 shadow-md rounded relative">
                    <div className="animate-spin absolute top-4">
                        <span className='animate-spin bg-red-500 '><FaSpinner/></span>
                    </div>
                    <p className='text-blue-800 '> Country Data is Loading Please Wait</p>
                </div>
            }
        </div>
    );
};

export default CountryDetails;