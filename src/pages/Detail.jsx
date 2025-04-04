import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice';
import DetailComb from "../Components/Detail/DetailComb"
import Loading from "../Components/loading"

const Detail = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {productDetail, productDetailStatus} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getDetailProduct(id))
    },[dispatch, id])

    console.log(productDetail, "productDetail")
  return (
    <div>
        {
            productDetailStatus == "LOADING" ? <Loading/> : <DetailComb productDetail={productDetail}/>
        }
        
    </div>
  )
}

export default Detail