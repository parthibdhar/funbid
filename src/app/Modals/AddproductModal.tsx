/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import MainModal from "./Main.Modal";
import { FaEdit } from "react-icons/fa";
import Uploader from "../Components/Uploader";
import { Input, Message } from "../Components/UsedInputs";
import { ImUpload } from "react-icons/im";
import { DateTime } from "ts-luxon";

type Props = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const AddproductModal: React.FC<Props> = ({ modalOpen, setModalOpen }) => {
  const [productToAdd, setProductToAdd] = useState({
    name: "",
    description: "",
    startingDate: "",
    endingDate: "",
    startingPrice: "",
    priceIncreament: "",
  });

  const handleAddProduct = () => {
    // Function to get the ordinal suffix for a given day
    const getOrdinal = (day: number): string => {
      if (day > 3 && day < 21) return "th"; // Handles 11th, 12th, 13th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const startDate: DateTime = DateTime.fromISO(productToAdd?.startingDate);
    const startOrdinal: string = getOrdinal(startDate.day);
    const isoStart: String = startDate.toFormat(`d'${startOrdinal}' LLL, yyyy`);
    console.log(isoStart);
    console.log("productToAdd", productToAdd);
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="flex flex-col gap-6 m-3 ">
        <h2 className="text-xl font-bold ">Add Product</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">Product Image</p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border-border rounded border">
              <img
                src="/images/products/horse.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* Product Name &  Description */}
          <div className="flex flex-col gap-6">
            <Input
              label="Product  Name"
              placeholder="Horse"
              type="text"
              bg={true}
              name={""}
              value={productToAdd?.name}
              onChange={(e) => {
                setProductToAdd({ ...productToAdd, name: e.target.value });
              }}
            />
            {/* DESCRIPTION */}
            <Message
              label=" Description"
              placeholder="Make it Short & Sweet"
              name="description"
              value={productToAdd.description}
              onChange={(e) => {
                setProductToAdd({
                  ...productToAdd,
                  description: e.target.value,
                });
              }}
              //   bg={true}
            />
          </div>
          <div className=" flex flex-col gap-6">
            <Input
              label="Starting Date"
              placeholder="Game Of Thrones"
              type="date"
              bg={true}
              name={""}
              value={productToAdd?.startingDate}
              onChange={(e) => {
                setProductToAdd({
                  ...productToAdd,
                  startingDate: e.target.value,
                });
              }}
            />
            <Input
              label="starting Price"
              placeholder="Game Of Thrones"
              type="number"
              bg={true}
              name={""}
              value={productToAdd?.startingPrice}
              onChange={(e) => {
                setProductToAdd({
                  ...productToAdd,
                  startingPrice: e.target.value,
                });
              }}
            />
          </div>
          <div className=" flex flex-col gap-6">
            <Input
              label="Ending Date"
              placeholder="Game Of Thrones"
              type="date"
              bg={true}
              name={""}
              value={productToAdd?.endingDate}
              onChange={(e) => {
                setProductToAdd({
                  ...productToAdd,
                  endingDate: e.target.value,
                });
              }}
            />
            <Input
              label="Price Increment"
              placeholder="Game Of Thrones"
              type="number"
              bg={true}
              name={""}
              value={productToAdd?.priceIncreament}
              onChange={(e) => {
                setProductToAdd({
                  ...productToAdd,
                  priceIncreament: e.target.value,
                });
              }}
            />
          </div>
        </div>

        {/* Product VIDEO */}
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-border font-semibold text-sm">
            Product Vedio
          </label>
          <Uploader />
        </div>

        {/* CASTS */}
        {/* <div className="w-full grid lg:grid-cols-2 gap-6 items-start "> 
          {/* <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded "
          >
            Add Cast
          </button> */}
        {/* <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4 "> */}
        {/* {UsersData?.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
              >
                <img
                  src={
                    user?.image ? `/images/${user?.image}` : "/images/user.png"
                  }
                  alt={user?.fulName}
                  className="w-full h-24 object-cover mb-4"
                />
                <p>{user?.fulName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => {
                      setCast(user);
                      setModalOpen(true);
                    }}
                    className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded"
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))} */}
        {/* </div> */}
        {/* </div> */}

        {/* SUBMIT */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          <button
            onClick={handleAddProduct}
            className=" transitions hover:bg-transparent hover:border-subText hover:text-subText  font-medium w-full flex-rows gap-6 bg-text border-y border-subMain text-subText py-4 rounded "
          >
            <ImUpload /> cancel
          </button>
          <button className="transitions hover:bg-transparent hover:border-subText hover:text-subText font-medium w-full flex-rows gap-6 bg-subText border-2 border-subMain text-white py-4 rounded ">
            <ImUpload /> Publish Product
          </button>
        </div>
      </div>
    </MainModal>
  );
};

export default AddproductModal;
