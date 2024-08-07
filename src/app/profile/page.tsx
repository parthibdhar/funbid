'use client'
import React, { useState } from 'react'
import Layout from '../Layout/Layout/Layout'
import SideBar from '../constants/SiderBar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Input } from '../Components/UsedInputs'
import Link from 'next/link'
import { MdSaveAs } from "react-icons/md";
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setError(null);
  try {
    const user = await signUp(email, password);
    if (user) {
      await createUserProfile(user.uid, { email, createdAt: new Date() });
      router.push("/signIn"); // Redirect to a protected route after successful signup
    }
  } catch (error: any) {
    setError(error.message);
  }
};
const Page = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const router = useRouter();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      
    } catch (error: any) {
      setError(error.message);
    }
  };

  const setNumber = (value: any) => {
    
    const lastValue = value.slice(-1)
   
    const val = parseInt(lastValue)
      if(Number.isNaN(val) === false || value === ''){
        setUser({...user, phone: value});
        setInputError("");
      }
      else setInputError("Please enter a valid number")
  }
  return (
    <SideBar >
         <div className=" mx-36  my-24">
        <form
          onSubmit={handleSubmit}
          
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={33}
            height={6}
            className="w-full h-12 object-contain"
          />
         
          <div className="w-full">
         
            <Input
              label="Full Name"
              name={"name"}
              placeholder={"parthibdhar"}
              type="text"
              bg={true}
              onChange={  (e) => setUser({...user, name: e.target.value }) }
              value= {user.name}
            />
           {inputError && <p className="text-red-500">{inputError}</p>}
           {inputError}
          </div>
          <div className="w-full">
            <Input
              label="Phone Number"
              placeholder={"9674320582"}
              type="text"
              name={"password"}
              bg={true}
              onChange={(e) => setNumber(e.target.value)}
              value={user.phone}
            />
            
          </div>
          <button
            type="submit"
            className="bg-border transitions mt-3 hover:bg-main hover:border-2 hover:border-border hover:text-border flex-rows gap-4 text-white p-4 rounded-lg w-full text-md"
          >
            <MdSaveAs /> Confirm  to Save
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

export default Page