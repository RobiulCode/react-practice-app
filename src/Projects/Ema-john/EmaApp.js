import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './src/component/Header/Header';
import Manage from './src/component/Manage/Manage';
import Error404 from './src/component/NotFound/Error404';
import ProductDetails from './src/component/ProductDetails/ProductDetails';
import Review from './src/component/Review/Review';
import Shop from './src/component/Shop/Shop';



const EmaApp=()=>{
    return(
            <div className="">
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Shop/>}></Route>
                    <Route path='/shop' element={<Shop/>}></Route>
                    <Route path='/review' element={<Review/>}></Route>
                    <Route path='/manage' element={<Manage/>}></Route>
                    <Route path='/product/:productKey' element={<ProductDetails/>}></Route>
                    <Route path='*' element={<Error404/>}></Route>
                </Routes>
            </div>
    )
}

export default EmaApp