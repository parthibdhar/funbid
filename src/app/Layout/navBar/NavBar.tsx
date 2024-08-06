/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from "@/app/constants/Dropdown";

export interface MenuItem {
    title: any;
    route?: string;
    children?: MenuItem[];
  }

const NavBar = () => {
  const hover = "hover:text-white transitions text-white ";

  // const Hover = ({ isActive }) => (isActive ? 'text-black' : hover)

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";
  const handleAddProduct = () => {
    alert("add product");
    console.log("add product");
  };

  

   const menuItems: MenuItem[] = [
    {
      title : <FaRegUserCircle />,
      children: [
        {
          title: "Dashboard",
          route: "../../dashboard",
        },
        {
          title: "Settings",
          route: "/products/doozers",
        },
        {
          title: "signout",
          route: "/products/zizzer-zazzers",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-main sticky h-20 top-0 z-20 border">
        <div className="container max-auto py-4 px-1 lg:grid gap-10 grid-cols-12 justify-between items-center">
          {/* logo */}
          <div className="col-span-2 lg:block hidden">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={144}
              height={48}
              className="w-full h-12 object-contain pr-6"
            />
          </div>
          {/* search */}
          <div className="col-span-2 ">
            <form
              action=""
              className="w-full h-8 text-sm bg-inputBg rounded flex-btn gap-4 text-white px-3"
            >
              <CiSearch className="search-icon" size={24} />
              <input
                type="text"
                placeholder="Search"
                className="  focus:outline-none text-sm bg-transparent border-none p-2 text-white w-11/12 h-12"
              />
            </form>
          </div>

          {/* menues */}
          <div className=" col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 lg:flex justify-between xl:justify-end items-center">
            <Link
              href={"../../history"}
              className="hover:text-text transitions text-white"
            >
              History
            </Link>
            <Link
              href={"../../currentBid"}
              className="hover:text-text transitions text-white"
            >
              Current Bid
            </Link>
          </div>

          {/* add product */}
          <div className="col-span-3 hidden xl:gap-14 2xl:gap-20 lg:flex justify-between xl:justify-end items-center">
            <button
              onClick={handleAddProduct}
              className="bg-dry  text-text rounded-xl px-4 py-2 justify-end hover:bg-transparent hover:border border-text transitions"
            >
              {" "}
              Add product
            </button>
          </div>

          {/* profile */}
          <div className="col-span-1 hidden xl:gap-14 2xl:gap-20 lg:flex justify-between xl:justify-end items-center">
            <div className="text-4xl justify-center hover:text-text transitions text-white">
              {menuItems.map((item) => {
                return item?.children ? (
                    <Dropdown key={item.title} item={item} />
                ) :
                (
                    <Link className="hover:text-text" href={item?.route || ""}>
                      {item.title}
                    </Link>
                  );
              } 
                  
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default NavBar;
