import React from 'react'
import { Link } from 'react-router-dom'

const Cart=({cart})=> {

  //fixed number convert
  const fixed=(number)=>{
    return(Number((number).toFixed(2)))
  }

  const total=fixed(cart.reduce((total,product)=>total+(product.price*product.quantity),0))
  let shipping = 0;
  if(total>30){
    shipping = 0
  }else if(total>20){
    shipping = 2.99
  }else if(total > 10){
    shipping = 3.99
  }
  const tax = fixed(total * .05)
  const grandTotal = (fixed(total + shipping + tax))

  

  return (
    <div className="">
      <h1 className="text-2xl text-center">Order summary</h1>
      <p>Total order: {cart.length}</p>
      <p>Product price: {total}</p>
      <p>shipping Fee: {shipping}</p>
      <p>Vat + Tax: {tax}</p>
      <p>Total price: {grandTotal}</p>
      <table>
        <tbody>
          
        </tbody>
      </table>
      <Link to='/review'>
        <button className="bg-blue-400 py-1 px-6 mt-2 rounded  flex items-center">Review Order</button>
      </Link>
    </div>
  )
}
export default Cart