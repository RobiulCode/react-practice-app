import React,{createContext,useState} from 'react';
import CategoryContextApp from './component/Category/Category';
import HeaderContextApp from './component/Header/Header';
import ShipmentContextApp from './component/Shipment/Shipment';
export const CountContext = createContext()
export const CategoryContext = createContext()


const ContextApp = () => {
    const [count,setCount] = useState(0)
    const [category,setCategory] = useState('?')


    return (
        <div className='w-1/2 mx-auto mt-6 p-3 bg-slate-100 shadow-md rounded-md space-y-5'>
           <CountContext.Provider value={[count,setCount]}>
                <HeaderContextApp></HeaderContextApp>
           </CountContext.Provider>
           <CategoryContext.Provider value={[category,setCategory]}>
                <CategoryContextApp></CategoryContextApp>
           </CategoryContext.Provider>
           
           <ShipmentContextApp></ShipmentContextApp>
        </div>
    );
};

export default ContextApp;