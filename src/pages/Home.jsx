import Category from "../Components/Home/Category"
import SliderComb from "../Components/Home/SliderComb"
import Sorting from "../Components/Home/Sorting"
import Products from "../Components/Home/Products"
import React, {useState} from "react"

const Home = () => {

  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <SliderComb/>
      <Sorting setSort={setSort}/>
      <div className="flex">
        <Category setCategory={setCategory}/>
        <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home