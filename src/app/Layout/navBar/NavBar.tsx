/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import Dropdown from "@/app/constants/Dropdown";
import { handleLogout } from "../../helper/logout";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/app/store/hooks";
import { FaCircle } from "react-icons/fa";

export interface MenuItem {
  title: any;
  route?: string;
  onClick?: boolean;
  children?: MenuItem[];
}
type props = {
  onclick: () => any;
};

const NavBar = () => {
  const user = useAppSelector((state) => state.user);
  console.log(25, "user", user.email.length);
  const hover = "hover:text-white transitions text-white ";

  // const Hover = ({ isActive }) => (isActive ? 'text-black' : hover)

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";
  const handleAddProduct = () => {
    if (user.email.length === 0) {
      alert("please login first");
      return;
    }
    alert("add product");
    console.log("add product");
  };

  const menuItems: MenuItem[] = [
    {
      title: <FaRegUserCircle />,
      children: [
        {
          title: "Dashboard",
          route: "../../dashboard",
        },
        {
          title: "profile",
          route: "../../profile",
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
          <div className=" col-span-2 font-medium text-sm hidden xl:gap-14 2xl:gap-20 lg:flex justify-between xl:justify-end items-center">
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

          {/* if user then coin or signUp ot Login Page */}
          {user?.email ? (
            <div
              className="col-span-2 font-medium text-sm hidden xl:gap-14
               2xl:gap-20 lg:flex justify-between xl:justify-end items-center"
            >
              <div className=" text-gold flex">
                {" "}
                <FaCircle size={24} /> <p className="text-white ml-2"> 10 </p>
                <button className="leading-7 mb-3">
                  <CiCirclePlus size={20} />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div
                className="col-span-2 font-medium text-sm hidden xl:gap-14
               2xl:gap-20 lg:flex justify-between xl:justify-end items-center
                hover:text-text transitions text-white"
              >
                <Link
                  href={"../../signIn"}
                 
                >
                  Login
                </Link>
                <Link
                  href={"../../signUp"}
                   className="col-span-2 font-medium text-sm hidden xl:gap-14
               2xl:gap-20 lg:flex justify-between xl:justify-end items-center
                hover:text-text transitions text-white"
                >
                  {" "}
                  sign up
                </Link>
              </div>
            </>
          )}

          {/* add product */}
          <div className="col-span-2 hidden xl:gap-14 2xl:gap-20 lg:flex justify-between xl:justify-end items-center">
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
                ) : (
                  <Link className="hover:text-text" href={item?.route || ""}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
