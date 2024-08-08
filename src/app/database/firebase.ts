
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAjvdXheTRVUOsikyS6p6fu17qK45RgW68",
    authDomain: "biding-firebase.firebaseapp.com",
    projectId: "biding-firebase",
    storageBucket: "biding-firebase.appspot.com",
    messagingSenderId: "742621524137",
    appId: "1:742621524137:web:86be17fd21b68c164db9b8",
    measurementId: "G-7J3D10VVS1",
};
console.log(firebaseConfig)
console.log("firebaseConfig")

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signOutUser = () => signOut(auth);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
