"use client";
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { doSignOut } from '../../../firebase/auth';

const navbarOption = [
  { label: 'Home', route: '/' },
  { label: 'About us', route: '/' },
  { label: 'Dashboard', route: '/dashboard' },
]
export default function Navbar({ isLoogedIn }) {
  const [isOpen, setIsOpen] = useState(false);
 
  const cartItemsLength = useSelector(state => state.cart.cartList)?.length
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const onSignOut = async () => {
    localStorage.clear()
    window.location.href = '/user'
  }
  return (
    <nav className="flex navbar">
      <div className="pc-nav w-full flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className='select-none'><i>eCommerce</i></Link>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex space-x-8 text-md">
          {
            navbarOption?.map((option, index) => <Link key={index} to={option.route} className="cursor-pointer hover:text-orange-300 transition duration-300">{option.label}</Link>)
          }
        </div>

        {/* Login Link */}
        <div className="md:items-center gap-4 hidden md:flex ">
          <Link title='Cart' to='cart' className='text-2xl relative'>
            <span title={`${cartItemsLength} Items are avaiable in Cart`} className='absolute bg-red-500 cursor-pointer cart-no text-sm flex items-center justify-center'>{cartItemsLength}</span>
            <FaOpencart />
          </Link>
          {
            isLoogedIn ? <span onClick={onSignOut}>Logout</span> : <Link to='user'>Login / Register</Link>
          }
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed z-20 top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="text-white">
          <FiX size={24} />
        </button>
        <div className="mt-8 space-y-6 flex flex-col">
          {
            navbarOption?.map((option, index) => <Link key={index} to={option.route} onClick={toggleMenu} className="block text-xl hover:text-gray-400 transition duration-300">{option.label}</Link>)
          }
          <Link to='cart' onClick={toggleMenu} className='relative'>
            <span title={`${cartItemsLength} Items are avaiable in Cart`} className='absolute bg-red-500 cursor-pointer cart-no text-sm flex items-center justify-center'>{cartItemsLength}</span>
            <FaOpencart className='text-2xl' />
          </Link>
        </div>
      </div>
    </nav>
  );
}