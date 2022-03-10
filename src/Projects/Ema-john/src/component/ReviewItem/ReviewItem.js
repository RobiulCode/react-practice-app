import React from 'react'

const ReviewItem=({product,removeProduct})=> {
    const {img,name,quantity,key,price} = product
    return(
            <div className="flex border-b mb-2">
                <div className="w-3/12">
                    <img src={img} alt=""  className=''/>
                </div>
                <div className="w-9/12">
                    <div className="">
                        <p>{name}</p><br />
                        <p>Total Order: {quantity}</p><br />
                        <p>Price: {price}</p><br />
                    </div>
                    <div className="">
                        <button className="bg-blue-400 py-1 px-4 my-3 rounded  flex items-center" onClick={()=>removeProduct(key)}>
                                Remove Item
                        </button>
                    </div>
                </div>
            </div>
    )
}
export default ReviewItem