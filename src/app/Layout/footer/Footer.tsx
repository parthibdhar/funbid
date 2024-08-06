import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  const Links = [
    {
      title: "Pages",
      links: [
        { name: "seasonal", link: "../../seasonal" },
        { name: "AddProduct", link: "../../AddProduct" },
        { name: "History", link: "../../History" },
        { name: "Ongoing", link: "../../Ongoing" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "FAQ", link: "../../FAQ" },
        { name: "Support", link: "../../Support" },
        { name: "Feedback", link: "../../Feedback" },
      ],
    },
  ];
  return (
    <div className="bg-subMain h-fit border">
      <div className="container mx-auto px-2  border-b-2 border-inputBg">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12  gap-5 lg:gap-7 py-10 justify-between">
          <div className="col-span-6 gap-5 mx-1 grid grid-cols-6">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={144}
              height={48}
              className=" w-full h-12 object-contain pl-6 justify-items-end items-end"
            />
            <h2 className="text-white text-2xl ml-0 leading-7">FunBid</h2>
          </div>
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-2xl text-white lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      href={`../../${text.link}`}
                      className="text-white w-full hover:text-border transitions"
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto px-2 ">
        <div className="grid grid-cols-3 my-3 py-3">
          <div className="col-span-1 ">
            <p className="text-text text-center text-md">
              © 2022 FunBid. All rights reserved.
            </p>
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-2">
            <p className="text-text text-center text-md">T&c </p>
            <p className="text-text text-center text-md">Privacy Policy </p>
          </div>
          <div className="col-span-1">
            <div className="mx-10 px-10">
              <ul className="flex items-center space-x-8 ">
                <li className=" text-xl text-text transitions">
                  <Link href="">
                    <CiTwitter />
                  </Link>
                </li>
                <li className=" text-xl text-text transitions">
                  <Link href="">
                    <FaInstagram />
                  </Link>
                </li>
                <li className=" text-xl text-text transitions">
                  <Link href="">
                    <FiFacebook />
                  </Link>
                </li>
                <li className=" text-xl text-text transitions">
                  <Link href="">
                    <SlSocialLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
