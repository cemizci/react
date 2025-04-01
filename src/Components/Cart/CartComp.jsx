import React from 'react'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../redux/cartSlice'

const CartComp = ({cart}) => {

  const dispatch = useDispatch()
    
  return (
    <div className='my-5 flex items-center justify-between p-3 bg-gray-50 rounded-md'>
        <div>
            <img src={cart?.image} className='w-[150px] h-[150px]'></img>
        </div>
        <div className='w-[450px] '>
            <h4 className='font-bold text-xl'>{cart?.title}</h4>
            <p>{cart?.description}</p>
        </div>
        <div className='font-bold text-xl'> {cart?.price} $ ({cart?.quantity}) </div>
        <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-gray-50 p-3 hover:bg-gray-100 border-1 rounded-lg border-solid w-[200px] text-center font-bold cursor-pointer '>Ürünü Sil</div>
    </div>
  )
}

export default CartComp