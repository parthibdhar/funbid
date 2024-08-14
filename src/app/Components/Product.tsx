/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

type Props = {
    product: {
        id: number,
        name: string,
        price: number,
        img: string
    }
};
const Product: React.FC<Props> = ({ product }) => {
    // console.log(product)
  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden ">
        <Link href={`/product/${product?.name}`} className="w-full">
          <img
            src={`/images/products/${product?.img}`}
            alt={product?.name}
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
            <h3 className="text-semibold truncate"> {product?.name}</h3>
            <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent  border-subMain rounded-md bg-subMain text-white ">
                <FaHeart/>
            </button>
        </div>
      </div>
  )
}

export default Product