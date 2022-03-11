import React, { useState,useEffect }from 'react'
import fakeData from '../../fakeData'
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import Thank from '../../images/giphy.gif'

const Review=()=>{

    const [cart,setCart] = useState([])
    const [orderPlaced,setOrderPlaced] = useState(false)

    const handlePlaceOrder=()=>{
        setCart([])
        processOrder();
        setOrderPlaced(true)
    }
    let thankYou = <img src={Thank} alt="" />
    const removeProduct =(productKey)=>{
        const newCart = cart.filter((pd)=> pd.key!==productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map( key =>{
            const product = fakeData.find( pd => pd.key === key)
            product.quantity = savedCart[key]
            return product;
        });
        setCart(cartProducts)
    },[])

    return(
        <div className="flex">
            <div className="w-3/4  border-r-2 px-2">
                {
                    cart.map((pd)=> <ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)
                }
                {
                    orderPlaced && thankYou
                }
            </div> 
            <div className="ml-3">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="bg-blue-400 py-1 px-6 mt-2 rounded  flex items-center">Place Order</button>
                </Cart>
            </div>
        </div>
    )
}
export default Review