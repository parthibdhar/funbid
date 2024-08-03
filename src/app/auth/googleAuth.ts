import { signInWithGoogle, signOutUser } from '../database/firebase';

export const googleSignIn = async () => {
  try {
    console.log('Signing in...');
    const result = await signInWithGoogle();
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const googleSignOut = async () => {
  try {
    await signOutUser();
  } catch (error) {
    throw error;
  }
};
