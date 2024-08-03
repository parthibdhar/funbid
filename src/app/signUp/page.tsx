'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '../auth/auth';
import { createUserProfile } from '../firestore/user';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   if (!router) {
  //     console.error('NextRouter was not mounted.');
  //   }
  // }, [router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const user = await signUp(email, password);
      if (user) {
        await createUserProfile(user.uid, { email, createdAt: new Date() });
        router.push('/dashboard'); // Redirect to a protected route after successful signup
      }
    } catch (error: any) {
      setError(error.message);
    } 
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
