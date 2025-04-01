import React from 'react'
import {useNavigate} from 'react-router-dom'

const Product = ({product}) => {

  const navigate = useNavigate(); 
  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className='flex flex-col cursor-pointer bg-white shadow-sm border border-slate-200 rounded-lg my-2 mx-3 w-96'>
        <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
             <img class="w-full h-full object-cover" src={product.image} alt="profile-picture" />
        </div>
        <div class="p-6 text-center">
    <h4 class="mb-1 text-xl font-semibold text-slate-800">
      {product.title}
    </h4>
    <p
      class="text-md font-semibold text-slate-500 uppercase">
      {product.price}$ 
    </p>
    <p class="text-base text-slate-600 mt-4 font-light line-clamp-3 ">
        {product.description}
    </p>
  </div>
  <div class="flex justify-center p-6 pt-2 gap-7">
    <button class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add To Cart
    </button>
  </div>
    </div>
  )
}

export default Product