/* eslint-disable react/display-name */
// lib/withAuth.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../database/firebase';
import DashbordSkeleton from '../Components/skeletons/DashbordSkeleton';


const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // console.log("user");
          // console.log(user.uid);
          localStorage.setItem('user',JSON.stringify(user));
          setAuthenticated(true);
        } else {
          router.push('/signIn');
          localStorage.removeItem('user');
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
