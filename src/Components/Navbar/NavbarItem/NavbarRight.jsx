import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.carts)
  
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  

  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center border p-2 rounded-md bg-amber-50'>
        <input type='text' placeholder='Search' className='bg-amber-50 outline-none' ></input>
        <CiSearch />
      </div>
      <IoHeart size={30} className='cursor-pointer'/>
      <div onClick={()=> navigate('cart')} className="relative cursor-pointer">
        <div className='absolute  -top-2 -right-1 bg-amber-800 text-white rounded-full w-4 h-5 '>
          <div className="text-count text-center text-sm font-sans">{carts?.length}</div>
        </div>
       <HiShoppingCart size={30}/>
      </div>
    </div>
    
  )
}

export default NavbarRight