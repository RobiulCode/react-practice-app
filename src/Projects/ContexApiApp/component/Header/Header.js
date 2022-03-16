import React,{useContext} from 'react';
import {CountContext} from '../../App'

const HeaderContextApp = () => {
    const [count,setCount] =useContext(CountContext)

    return (
        <div className=''>
            <p className='text-xl'>Count : <span className='font-bold'>{count}</span></p>
            <button onClick={()=>setCount(count+1)} className='py-0.5 px-3 border border-blue-500 rounded'>Add</button>
        </div>
    );
};

export default HeaderContextApp;