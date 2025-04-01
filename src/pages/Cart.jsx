import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getCartTotal} from "../redux/cartSlice"
import CartComp from '../Components/Cart/CartComp';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {carts, itemCount, totalAmount} = useSelector(state => state.carts)

  console.log(carts, itemCount, totalAmount , "carts")
  
 useEffect(() => {
    if (carts.length > 0) {
        dispatch(getCartTotal());
    }
 }, [carts, dispatch])

  return (
    <div>
        {
            carts?.length > 0 ? 
            <div> 
                <h3>Products</h3>
                {
                    carts?.map((cart,i)=> (
                        <CartComp key={i} cart={cart}/>
                    ))
                }
                <div className='flex items-center justify-end text-xl m-8 '>
                    <h4 className='mx-3'>Toplam Tutar:</h4>
                    <span className='font-bold text-2xl'>{totalAmount}$</span>
                </div>
            </div> : 
            <div> Sepetiniz Boş</div>
        }
    </div>
  )
}

export default Cart