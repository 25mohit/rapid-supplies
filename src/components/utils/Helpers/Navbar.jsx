import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <h2>eCommerce</h2>
        <ul className='flex gap-8'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="list">List</Link></li>
            <li><Link to="/">Sell</Link></li>
            <li><Link to="/">About us</Link></li>
        </ul>
        <Link to='user'>Login ?</Link>
    </div>
  )
}

export default Navbar