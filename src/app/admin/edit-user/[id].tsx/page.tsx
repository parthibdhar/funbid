import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../../../firestore/user';

const EditUser = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const user = await getUserProfile(id as string);
          setEmail(user.email);
          setLoading(false);
        } catch (error: any) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleUpdateUser = async () => {
    setError(null);
    try {
      await updateUserProfile(id as string, { email });
      router.push('/users');
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit User</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email" 
      />
      <button onClick={handleUpdateUser}>Update User</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default EditUser;
