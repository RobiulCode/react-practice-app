import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import fakeData from './../../fakeData'

const Shop=()=> {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts] = useState(first10)
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map( existingKey =>{
            const product = fakeData.find( pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey]
            return product;
        });
        setCart(previousCart)
    },[])

    const handleAddProduct=(product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find((pd)=> pd.key === toBeAddedKey)
        let count = 1;
        let newCart ;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = sameProduct.quantity + 1;
            const others = cart.filter((pd) => pd.key !== toBeAddedKey);
            newCart = [...others,sameProduct]
        }else{
            product.quantity = 1;
            newCart = [...cart,product]
        }
       
        setCart(newCart)
        
        addToDatabaseCart(product.key,count)
    }
  return (
    <div className="flex">
        <div className="w-3/4  border-r-2 px-2">
            {
                products.map((pd)=> <Product product={pd} handleAddProduct={handleAddProduct} showAddToCart = {true}></Product>)
            }
        </div>
        <div className="ml-3">
            <Cart cart={cart}>
                <Link to='/review'>
                    <button className="bg-blue-400 py-1 px-6 mt-2 rounded  flex items-center">Review Order</button>
                </Link>
            </Cart>
        </div>
    </div>
  )
}
export default Shop
