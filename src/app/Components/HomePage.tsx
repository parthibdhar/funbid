"use client";
import withAuth from "../middleware/withAuth";
import { useEffect, useState } from "react";
import { getUserProfile } from "../firestore/user";
import { auth } from "../database/firebase";
import { googleSignOut } from "../auth/googleAuth";
import { useRouter } from "next/navigation";
import Layout from "../Layout/Layout/Layout";
import SideBar from "../constants/SiderBar";
import Seasonal from "./Home/Seasonal";
import Trending from "./Home/Trending";
import Catagories from "./Home/Catagories";
import DashbordSkeleton from "./skeletons/DashbordSkeleton";
import SeasonalSkeleton from "./skeletons/SeasonalSkeleton";
import TrendingSkeleton from "./skeletons/TrendingSkeleton";

// type UserProfile = {
//   email: string;
//   name: string;
//   phone: string;
//   balance: number;
//   role: string;
//   createdAt: string;
// };

const HomePage = () => {
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const [error, setError] = useState<string | null>(null);
  

 
//   useEffect(() => {
    // const fetchProfile = async () => {
      
    //   console.log("Fetching profile...");
    //   try {
    //     const cachedProfile  = localStorage.getItem('user');
    //     if (cachedProfile) {
    //       setProfile(JSON.parse(cachedProfile) as UserProfile);
    //       return;
    //     }
    //     const user = auth.currentUser;
    //     if (user) {
    //       const profileData = await getUserProfile(user.uid);
    //       console.log(profileData);
    //       setProfile(profileData as UserProfile);
    //       localStorage.setItem('user',JSON.stringify(profileData));
    //     }
    //   } catch (error: any) {
    //     setError(error.message);
    //   }
    // };

    // fetchProfile();
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!profile) {
//     return <DashbordSkeleton/>;
//   }

  return (
    <Layout >
      <div className="container mx-auto min-h-screen px-2 mb-6">
      <Seasonal/>
      <Trending/>
      <Catagories/>
      {/* <p> {profile?.email} {profile?.createdAt} {profile?.name} {profile?.phone} {profile?.role} {profile?.balance}   </p> */}
      </div>
    </Layout>
  );
};

export default HomePage;
