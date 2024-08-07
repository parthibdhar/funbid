"use client";
import withAuth from "../../app/middleware/withAuth";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../app/firestore/user";
import { auth } from "../database/firebase";
import { googleSignOut } from "../auth/googleAuth";
import { useRouter } from "next/navigation";
import Layout from "../Layout/Layout/Layout";
import SideBar from "../constants/SiderBar";

type UserProfile = {
  email: string;
  createdAt: Date;
};

const Dashboard = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // log  out user
  const handleLogout = async () => {
    try {
      await googleSignOut();
      router.push("/signIn"); // Redirect to sign-in page after sign out
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      console.log("Fetching profile...");
      try {
        const user = auth.currentUser;
        if (user) {
          const profileData = await getUserProfile(user.uid);
          console.log(profileData);
          setProfile(profileData as UserProfile);
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
    <SideBar>
      <div className="text-center justify-center min-h-screen">
        <h1>Dashboard</h1>
        <p>Welcome, {profile.email}</p>
        <p className="text-subText">
          Account created on: {profile.createdAt.toString()}
        </p>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </SideBar>
  );
};

export default withAuth(Dashboard);
