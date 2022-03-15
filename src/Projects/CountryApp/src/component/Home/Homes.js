import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import Country from '../Country/Country';
import { FaSpinner } from "react-icons/fa";

const Home = () => {
    const [countries,setCountries] = useState([])
    const [searchValue,setSearchValue] = useState('')

    useEffect(()=>{
        getCountry()
        .catch(error => console.log(error))
    },[])
    //Data Load Function
    const getCountry=async()=>{
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json();
        await setCountries(data)
    }

    //Search Data Load Function
    const getSearch=(event) => {
        setSearchValue(event.target.value);
    }
    const search=async()=>{
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        const data = await response.json();
        await setCountries(data)
    }
    const value = countries.length
    console.log(value);
    return (
        <div className="">
           <div className="space-y-2 md:flex md:justify-between px-24 py-4 bg-slate-300">
               <p className="text-2xl font-medium">Where is your country</p>
                <div className="md:flex md:justify-center items-center">
                    <input type="text" placeholder="Search by name" className="py-1 px-3 rounded outline-none" onChange={getSearch}/>
                    <button className="-ml-8 bg-blue-500 rounded-full p-1 text-white" onClick={search}><HiOutlineSearch/></button>
                </div>
           </div>
           <div className="w-11/12 mx-auto p-4">
            {
                value>0 ? 
                            <div className="md:grid md:grid-cols-2 md:gap-4 mt-6">
                                {
                                    countries.map((country,index) => <Country country={country} key={index}></Country>)
                                }
                            </div>
                            :
                            <div className="w-1/4 mx-auto mt-24 bg-gray-200 p-10 shadow-md rounded relative">
                                <div className="animate-spin absolute top-4">
                                    <span className='animate-spin bg-red-500 '><FaSpinner/></span>
                                </div>
                                <p className='text-blue-800 '>Please Wait...........</p>
                            </div>
            }
           </div>
        </div>
    );
};

export default Home;