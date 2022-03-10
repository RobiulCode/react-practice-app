import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../images/logo.png'

const Header=()=> {
  return (
    <div className="">
        <div className="flex justify-center">
            <img src={logo} alt="" className='w-44 py-2' />
        </div>
        <div className=" bg-slate-400 py-3 space-x-2 pl-8">
            <Link to='/Shop' className='header-link'>Shop</Link>
            <Link to='/review' className='header-link'>Review</Link>
            <Link to='/manage' className='header-link'>Manage Order</Link>
        </div>
    </div>
  )
}
export default Header