import React, { useState } from 'react'
import { addToDatabaseCart } from '../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import fakeData from './../../fakeData'

const Shop=()=> {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts] = useState(first10)
    const [cart,setCart] = useState([])

    const handleAddProduct=(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
        const sameProduct = newCart.filter((pd)=> pd.key === product.key)
        const count = sameProduct.length
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
            <Cart cart={cart}></Cart>
        </div>
    </div>
  )
}
export default Shop
