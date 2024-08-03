'use client'
// pages/signin.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '../auth/auth';
import { googleSignIn } from '../auth/googleAuth';
import { createUserProfile } from '../firestore/user';
import { json } from 'stream/consumers';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // for google signin
  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const user = await googleSignIn();
      console.log("user in signin page");
      console.log(user);
      console.log(user?.displayName);
      console.log(user?.email);
      const email = JSON.stringify(user?.email);
      if (user) {
        await createUserProfile(user.uid, {email, createdAt: new Date() });
        router.push('/dashboard'); // Redirect to a protected route after successful signin
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
      router.push('/dashboard'); // Redirect to a protected route after successful signin
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Signin;
