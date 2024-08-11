import React from 'react'
import { prducts } from '../../data/products';
import { BsCollectionFill } from 'react-icons/bs';
import Titles from '../Titles';
import Product from '../Product';


const Trending = () => {
  return (
    <div className='my-16'>
    <Titles title="Trending Auctions" Icon={BsCollectionFill}/>
    <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3  grid-cols-1 gap-10">
      {
        prducts?.slice(0,4).map((product ,index) => {console.log(product)
           return (
          
          <Product key ={index} product = {product} />
        )})
      }
    </div>
  </div>
  )
}

export default Trending