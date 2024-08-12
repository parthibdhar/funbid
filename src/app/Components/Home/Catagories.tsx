import React, { useState } from "react";
import Titles from "../Titles";
import { TbVectorTriangle } from "react-icons/tb";
import { prducts } from "@/app/data/products";
import Product from "../Product";
import { Select } from "../UsedInputs";
import { Button } from "@headlessui/react";

const Catagories = () => {
  const [selectedValue, setselectedValue] = useState("second");
  const CatagoryOptions = [
    {
      value: "all",
      title: "All",
    },
    {
      value: "onGoing",
      title: "onGoing",
    },
    {
      value: "completed",
      title: "completed",
    },
  ];
  return (
    <div className="my-16">
      <Titles title="catagories" Icon={TbVectorTriangle} />
      <div className="grid grid-cols-3 my-3 mt-6">
        {CatagoryOptions.map((option) => (
          <button
            key={option.value}
            className=" col-span-1 btn btn-outline btn-sm btn-primary text-white hover:text-subText transitions"
            onClick={() => {setselectedValue(option.value); alert(option.value)}}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* <Select label="Catagory" options={CatagoryOptions} onChange={(e) => setselectedValue(e.target.value)}/> */}
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3  grid-cols-1 gap-10">
        {prducts?.slice(0, 4).map((product, index) => {
          console.log(product);
          return <Product key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Catagories;
