import React, { useState } from 'react';
import Condition from './src/component/condition';

const ConditionApp = () => {
    const [familier,setFamilier]=useState(false)
    const [name,setName]=useState('Tailwind CSS')

    const handleCondition =()=>{
        setFamilier(!familier)
        if(!familier){
            setName('Bootstrap')
        }else{
            setName('Tailwind CSS')
        }
    }
    return (
        <div className="bg-gray-200 h-auto p-10">
            <div className="w-1/2 mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className='text-2xl'>Toggle your button to render Condition</h1>
                <button className=' bg-blue-400 rounded shadow-lg shadow-blue-500/50 px-4 py-1 mt-4 text-white' onClick={handleCondition}>Change Here {name}</button>
                <Condition condition={familier} name={name}></Condition>
            </div>
        </div>
    );
};

export default ConditionApp;