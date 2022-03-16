import React,{useContext} from 'react';
import {CategoryContext} from '../../App'


const CategoryContextApp = () => {
    const [category,setCategory]= useContext(CategoryContext)
    return (
        <div>
            <p>Your selected category <span className='font-bold'>{category}</span></p>
            <div className="space-x-3 mt-4">
                <button className='py-0.5 px-3 border border-blue-500 rounded' onClick={()=>setCategory('Laptop')}>Laptop</button>
                <button className='py-0.5 px-3 border border-blue-500 rounded' onClick={()=>setCategory('Mobile')}>Mobile</button>
                <button className='py-0.5 px-3 border border-blue-500 rounded' onClick={()=>setCategory('Headphone')}>Headphone</button>
            </div>
        </div>
    );
};

export default CategoryContextApp;