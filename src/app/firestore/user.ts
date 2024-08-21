
// lib/firestore.ts
import { db } from '../database/firebase';
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import axios from 'axios';

export const createUserProfile = async (uid: string, data: {name: string; email: string; phone?: string; photo?: string; createdAt: Date }) => {
  try {
    console.log(10, data);
    console.log(data.email[1]);
    if(data?.email[0] === '"'  ){
      console.log("in here if");
      data.email = data.email.slice(1, -1) ;  
      data.name = data.name.slice(1, -1) ;  
    } else{
      data.email = data.email;
    }
    const UserData = {...data, role: "user", balance: 200, _id: uid, auction: []};
    console.log(16, UserData);
   await setDoc(doc(db, 'users', uid), UserData);
   return {success: true,
    UserData
   };
    
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
    if (querySnapshot.empty) {
      throw new Error('No users found');
    }
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};