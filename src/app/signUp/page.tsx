/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../auth/auth";
import { createUserProfile } from "../firestore/user";
import Layout from "../Layout/Layout/Layout";
import { Input } from "../Components/UsedInputs";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import Image from "next/image";
import { InlineError } from "../Components/Notifications/errorNotifications";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../validation/loginValidation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router) {
      console.error("NextRouter was not mounted.");
    }
  }, [router]);

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

  
  return (
    <Layout>
      <div className="container mx-auto flex-colo my-24 bg-main">
        <form
          onSubmit={handleSubmit}
          className="w-full 2xl:w-2/5 sm:p-14 p-8  md:w-3/5 flex-colo gap-4 bg-dry rounded-lg border border-border"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={33}
            height={6}
            className="w-full h-12 object-contain"
          />
          {/* <img src="../../../public/images/logo.png" 
                alt="logo"
                className='w-full h-12 object-contain ' /> */}
          <div className="w-full">
          {/* <input
          type="email" */}
          {/* value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required */}
        {/* /> */}
            <Input
              label="Email"
              name={"email"}
              
              placeholder={"parthibdhar3690@gmail.com"}
              type="email"
              bg={true}
              onChange={(e) => setEmail(e.target.value)}
              value= {email}

            />
           
          </div>
          <div className="w-full">
            <Input
              label="Password"
              placeholder={"********"}
              type="password"
              name={"password"}
              bg={true}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            
          </div>
          <button
            type="submit"
            className="bg-subMain transitions mt-3 hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign up
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
     
    </Layout>
  );
};

export default SignUp;

{/* <form
//  onSubmit={"handleSubmit"}
>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    required
  />
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    required
  />
  <button type="submit">Sign Up</button>
</form>
{error && <p>{error}</p>} */}