"use client";
import withAuth from "../../app/middleware/withAuth";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../app/firestore/user";
import { auth } from "../database/firebase";
import { googleSignOut } from "../auth/googleAuth";
import { useRouter } from "next/navigation";
import Layout from "../Layout/Layout/Layout";
import SideBar from "../constants/SiderBar";
import Seasonal from "../Components/Home/Seasonal";
import Trending from "../Components/Home/Trending";
import Catagories from "../Components/Home/Catagories";

type UserProfile = {
  email: string;
  name: string;
  phone: string;
  balance: number;
  role: string;
  createdAt: string;
};

const Dashboard = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // log  out user
  const handleLogout = async () => {
    try {
      await googleSignOut();
      
      localStorage.removeItem('user');
      router.push("/signIn"); // Redirect to sign-in page after sign out
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      
      console.log("Fetching profile...");
      try {
        const cachedProfile  = localStorage.getItem('user');
        if (cachedProfile) {
          setProfile(JSON.parse(cachedProfile) as UserProfile);
          return;
        }
        const user = auth.currentUser;
        if (user) {
          const profileData = await getUserProfile(user.uid);
          console.log(profileData);
          setProfile(profileData as UserProfile);
          localStorage.setItem('user',JSON.stringify(profileData));
        }
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
      <Seasonal/>
      <Trending/>
      <Catagories/>
      <p> {profile?.email} {profile?.createdAt} {profile?.name} {profile?.phone} {profile?.role} {profile?.balance}   </p>
      </div>
    </Layout>
  );
};

export default withAuth(Dashboard);
