"use client";
/* eslint-disable @next/next/no-img-element */
// pages/signin.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "../auth/auth";
import { googleSignIn } from "../auth/googleAuth";
import { createUserProfile } from "../firestore/user";
import Layout from "../Layout/Layout/Layout";
import { Input } from "../Components/UsedInputs";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { useAppDispatch } from "../store/hooks";
import { addUser } from "../store/features/user/userSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
const dispatch = useAppDispatch();
  // for google signin
  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      
      const user = await googleSignIn();
      console.log("user in signin page");
      console.log(user);
      console.log(user?.displayName);
      console.log(user?.email);
      console.log(user?.phoneNumber);
      console.log(user?.photoURL);
      const email = JSON.stringify(user?.email);
      const phone = user?.phoneNumber  ? JSON.stringify(user?.phoneNumber) :  "";
      const photo = user?.photoURL  ? JSON.stringify(user?.photoURL) :  "";
      if (user) {
       const usr = await createUserProfile(user.uid, {name: JSON.stringify(user?.displayName), email, phone,  photo, createdAt: new Date() });
      console.log("usr",usr?.UserData);
      const userData = {
        role: usr?.UserData.role || '', // Default to empty string if missing
        balance: usr?.UserData.balance || 0, // Default to 0 if missing
        _id: usr?.UserData._id || '', // Default to empty string if missing
        name: usr?.UserData.name || '', // Default to empty string if missing
        email: usr?.UserData.email || '', // Default to empty string if missing
        createdAt: usr?.UserData.createdAt || new Date(), // Default to current date if missing
        phone: usr?.UserData?.phone || '', // Default to empty string if missing
        auction: usr?.UserData?.auction || [] // Default to empty array if missing
      }
       alert(usr.success);
        console.log(39, 'signin', userData);
       if (usr?.UserData) {
        dispatch(addUser(userData));
       }
        router.push("/dashboard"); // Redirect to a protected route after successful signin
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  // for email and password signin
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await signIn(email, password); 
      router.push("/dashboard"); // Redirect to a protected route after successful signin
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto flex-colo my-24 bg-main">
        <div className="w-full 2xl:w-2/5 sm:p-14 p-8  md:w-3/5 flex-colo gap-4 bg-dry rounded-lg border border-border">
          <form onSubmit={handleSubmit}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={33}
              height={6}
              className="w-full h-12 object-contain"
            />
            <div className="w-full">
              <Input
                label="Email"
                name={"email"}
                placeholder={"parthibdhar3690@gmail.com"}
                type="email"
                bg={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
              <FiLogIn /> Sign in
            </button>
            <p className="text-center text-border">
              have not account?{" "}
              <Link
                href={"/signUp"}
                className="text-dryGray font-semibold ml-2 my3"
              >
                Sign up
              </Link>
            </p>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="bg-subMain transitions mt-3 hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FaGoogle color="#6D28D9" fontSize={25}/> Sign in with Google
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;

{
  /* <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {error && <p>{error}</p>}
    </div> */
}
