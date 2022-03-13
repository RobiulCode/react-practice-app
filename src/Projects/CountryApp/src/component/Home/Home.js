import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import Country from '../Country/Country';

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
    console.log(countries);
    return (
        <div className="px-24 py-6 bg-slate-300">
           <div className="space-y-2 md:flex md:justify-between">
               <p className="text-2xl font-medium">Where is your country</p>
                <div className="md:flex md:justify-center items-center">
                    <input type="text" placeholder="Seach by name" className="py-1 px-3 rounded outline-none" onChange={getSearch}/>
                    <button className="-ml-8 bg-blue-500 rounded-full p-1 text-white" onClick={search}><HiOutlineSearch/></button>
                </div>
           </div>
           <div className="md:grid md:grid-cols-2 md:gap-4 mt-6">
                {
                    countries.map((country,index) => <Country country={country} key={index}></Country>)
                }
           </div>
        </div>
    );
};

export default Home;