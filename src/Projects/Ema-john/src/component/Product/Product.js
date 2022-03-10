import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Product=({product,handleAddProduct,showAddToCart})=> {

    
    const {img,name,price,seller,stock,key} = product


    return(
        <div className="flex border-b mb-2">
           <div className="w-3/12">
                <img src={img} alt=""  className=''/>
           </div>
           <div className="w-9/12">
                <Link to={'/product/'+key}>{name}</Link><br />
                <p> By: {seller}</p><br />
                <p>Price: $ {price}</p><br />
                <p>Sell will stop after {stock} left</p><br />
                {showAddToCart && <button className="bg-blue-400 py-2 px-4 mb-2 rounded  flex items-center" onClick={()=>handleAddProduct(product)}>
                    <FaShoppingCart/><span className='ml-2'>Buy Now</span>
                </button>}
           </div>
        </div>
    )
}
export default Product