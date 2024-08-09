
// lib/firestore.ts
import { db } from '../database/firebase';
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import axios from 'axios';

export const createUserProfile = async (uid: string, data: {name: string; email: string; createdAt: Date }) => {
  try {
    const UserData = {...data, role: "user", balance: 200, _id: uid};
    console.log(UserData);
    await setDoc(doc(db, 'users', uid), UserData);
  } catch (error) {
    throw error;
  }
};


export const updateUserProfile = async (uid: string, data: Partial<{name: string; phone: string; email: string; createdAt: Date }>) => {
  try {
    console.log("data");
    console.log(data);
    await updateDoc(doc(db, 'users', uid), data);
    return "data updated";
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (uid: string) => {
  console.log("user id")
  console.log(uid)
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      throw new Error('User does not exist');
    }
  } catch (error) {
    throw error;
  }
};


export const deleteUserProfile = async (uid: string) => {
   
  console.log("hi delete")
  try {
    try {
      const response = await axios.post('/user/deleteUser', {
        uid
      })
      console.log(response.data)
      console.log("deleted user")
      
    } catch (error) {
      console.log(error)
    }
    
    await deleteDoc(doc(db, 'users', uid));
    console.log("deleted user docs")
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};