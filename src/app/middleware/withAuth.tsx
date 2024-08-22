/* eslint-disable react/display-name */
// lib/withAuth.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../database/firebase";
import DashbordSkeleton from "../Components/skeletons/DashbordSkeleton";
import { addUser } from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { getUserProfile } from "../firestore/user";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState({
      balance: 0,
      email: "",
      name: "",
      phone: "",
      role: "",
      _id: "",
      createdAt: Date,
      auction: [],
    });
    const router = useRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        
        if (user) {
          const usr = await getUserProfile(user.uid);
          console.log("user", user);
          console.log("usr", usr);
          setUserData({
            balance: usr?.balance || 0,
            email: usr?.email || "",
            name: usr?.name || "",
            phone: usr?.phone || "",
            role: usr?.role || "",
            _id: usr?._id || "",
            createdAt: usr?.createdAt || new Date(),
            auction: usr?.auction || [], // Optional field
          });
          dispatch(addUser(userData));
          localStorage.setItem("user", JSON.stringify(user));
          setAuthenticated(true);
        } else {
          router.push("/signIn");
          localStorage.removeItem("user");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <DashbordSkeleton {...props} />;
    }

    if (!authenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
