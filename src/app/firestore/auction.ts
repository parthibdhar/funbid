import { db } from "../database/firebase";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs } from "firebase/firestore";


export const createAuction = async (data: {
    name: string,
    description: string,
    start_date: any,
    end_date: any,
    createdBy: string,
    status: 'accepted' | 'pending' | 'rejected' | 'completed',
    price: string,
    priceIncreament: string,
    highestBid?: [
        user?: string,
        price?: string
    ],
    
    createdAt: Date,
    image: string,
}) => {
    try {
        const response = await setDoc(doc(db, "auctions", data.name), {...data,  status: 'pending'});
        console.log(response);
        return {
            success: true,
            message: "data added successfully",
            response
        };
    } catch (error) {
        throw error;
    }
}

export const getAuction = async (title: string) => {
    try {
        const response = await getDoc(doc(db, "auctions", title));
        if (response.exists()) {
            return response.data();
        } else {
            throw new Error('Auction does not exist');
        }
    } catch (error) {
        throw error;
    }
}

export const getAllAuctions = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "auctions"));
        if (querySnapshot.empty) {
            throw new Error('No auctions found');
        }
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        throw error;
    }
}

export const updateAuction = async (title: string, data: any) => {
    try {
        const response: any = await updateDoc(doc(db, "auctions", title), data);
        if (response) {
            return "data updated successfully";
        }
        throw new Error('Auction does not exist');
    } catch (error) {
        throw error;
    }
}

export const deleteAuction = async (title: string) => {
    try {
        const response: any = await deleteDoc(doc(db, "auctions", title));
        if (response) {
            return "data deleted successfully";
        }
        throw new Error('Auction does not exist');
    } catch (error) {
        throw error;
    }
}

export const deleteAuctions = async (titles: string[]) => {
    try {
        // Create an array of promises for each deletion
        const deletePromises = titles.map(title => deleteAuction(title));

        // Wait for all deletions to complete
        await Promise.all(deletePromises);

        return "Selected auctions deleted successfully";
    } catch (error: any) {
        throw new Error(`Error deleting auctions: ${error.message}`);
    }
};
