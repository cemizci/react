import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const DetailComb = ({productDetail}) => {


  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(0);

  const decrement = () => {
    if(quantity > 0) setQuantity(quantity - 1)
  }

  const increment = () => {
    if(quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
  }

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity, price: productDetail?.price, description: productDetail?.description}))
  }

  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[300px] h-[300px]' src={productDetail?.image}></img>
        <div className=''>
            <div className='font-bold text-4xl'>{productDetail?.title}</div>
            <div className='my-5'>{productDetail?.description}</div>
            <div className=''>{productDetail?.rating?.rate}</div>
            <div className=''>{productDetail?.rating?.count}</div>
            <div className=''>{productDetail?.price} <span>$</span></div>
            <div className='flex items-center gap-5'>
               <div onClick={decrement} className='bg-gray-50 p-3 rounded-md cursor-pointer font-bold'>-</div>
                <input className='cursor-pointer w-14 font-bold text-center my-5 bg-gray-50 p-3' type="text" value={quantity} />
               <div onClick={increment} className='bg-gray-50 p-3 cursor-pointer font-bold'>+</div>
             </div>
             <div onClick={addBasket} className='cursor-pointer bg-gray-50 w-[200px] text-2xl h-12 flex items-center justify-center rounded-md bg-amber-200 hover:bg-gray-100 border-none'>Sepete Ekle</div>
        </div>
        
    </div>
  )
}

export default DetailComb