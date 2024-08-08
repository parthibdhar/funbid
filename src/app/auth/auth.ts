// lib/auth.ts
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '../database/firebase';

export const signUp = async (email: string, password: string) => {
  try {
    console.log("in try");
    console.log(email, password);
    console.log(auth);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
