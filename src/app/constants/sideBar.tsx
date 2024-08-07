'use client'
import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Layout from "../Layout/Layout/Layout";
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface SideBarProps {
    children: React.ReactNode;
}


const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const SideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: BsFillGridFill,
    },
    {
      name: "Movies List",
      link: "/movieslist",
      icon: FaListAlt,
    },
    {
      name: "Add Movie",
      link: "/addmovie",
      icon: RiMovie2Fill,
    },
    {
      name: "Categories",
      link: "/categories",
      icon: HiViewGridAdd,
    },
    {
      name: "Users",
      link: "/users",
      icon: FaUsers,
    },
    {
      name: "Update Profile",
      link: "/profile",
      icon: FiSettings,
    },
    {
      name: "Favorites Movies",
      link: "/favorites",
      icon: FaHeart,
    },
    {
      name: "Change Password",
      link: "/password",
      icon: RiLockPasswordLine,
    },
  ];

  const pathname = usePathname();
  console.log(pathname);
  const active = `bg-subMain text-subText`;
  const hover = "hover:text-white hover:bg-main";
  const inActive ="rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }: {isActive: any } ) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6 ">
          <div className="sticky col-span-2 bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {
              //Sidebar Links
              SideLinks?.map((link, i) => (
                <Link key={i} href={link.link} className={Hover({ isActive: link.link === pathname })}>
                  <link.icon /> <p>{link.name}</p>
                </Link>
              ))
            }
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SideBar;
