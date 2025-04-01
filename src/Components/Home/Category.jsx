import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice'



const Category = ({setCategory}) => {

   const dispatch = useDispatch();
   const {categories} = useSelector(state => state.categories)

   console.log(categories, "categories")
   
   useEffect(() => {
    dispatch(getCategories())
   },[dispatch])
  return (
    <div className="w-1/6 bg-gray-50 p-3">
        <div className='border-b pb-2 text-xl font-bold'>Catgeroy</div>
        {
            categories?.map((category,i)=>(
                <div onClick={()=> setCategory(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-100' key={i}>{category}</div>
            ))
        }
    </div>
  )
}

export default Category