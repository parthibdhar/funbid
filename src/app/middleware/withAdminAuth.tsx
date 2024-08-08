/* eslint-disable react/display-name */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../database/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../database/firebase';

const withAdminAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
            console.log("user");
            console.log(user.uid);
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          console.log(userDoc.data());
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            setIsAdmin(true);
          } else {
            router.push('/no-access'); // Redirect if not an admin
          }
        } else {
          router.push('/signIn');
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!isAdmin) {
      return null; // or a component with an access denied message
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
