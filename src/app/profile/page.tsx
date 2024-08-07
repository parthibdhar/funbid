'use client'
import React, { useState } from 'react'
import Layout from '../Layout/Layout/Layout'
import SideBar from '../constants/sideBar'
import { FiLogIn } from 'react-icons/fi'
import Link from 'next/link'
import { Input } from '../Components/UsedInputs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signUp } from '../auth/auth'
import { createUserProfile } from '../firestore/user'
import { MdSaveAs } from 'react-icons/md'
import withAuth from '../middleware/withAuth'

const Page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
const [user, setUser] = useState({
  name: "",
  phone: "",
});
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
     console.log(user)
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <SideBar  >
        <div className=" flex  flex-col mx-36 my-24 ">
        <form
          onSubmit={handleSubmit}
          
        >
          <div className="grid grid-cols-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={33}
            height={6}
            className="w-full h-12 object-contain"
          />
          <button className="col-span-1 text-white">hi </button>
          </div>
          
        
          <div className="w-full">
            <Input
              label="Full Name"
              name={"name"} 
              placeholder={"parthib dhar"}
              type="text"
              bg={true}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value= {user?.name}

            />
           
          </div>
          <div className="w-full">
            <Input
              label="Phone Number"
              placeholder={"9674320582"}
              type="number"
              name={"phone"}
              bg={true}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              value={user?.phone}
            />
            
          </div>
          <button
            type="submit"
            className="bg-text  mt-3 hover:bg-main hover:border-2 hover:border-text hover:text-text flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <MdSaveAs  /> Confirm to save
          </button>
          <p className="text-center text-border">
            Already have an account?{" "}
            <Link
              href={"/signIn"}
              className="text-dryGray font-semibold ml-2 my3"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
        
        </SideBar>
  )
}

export default withAuth(Page);