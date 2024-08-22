import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface UserState {
  name: any;
  email: any;
  phone?: any; // Optional field
  balance: any;
  role: any;
  _id: any;
  createdAt: any;
  auction?: any[]; // Optional field
}


// Define the initial state using that type
const initialState: UserState = {
  name: "",
  email: "",
  phone: "",
  auction: [],
  balance: 0,
  role: '',
  _id: '',
  createdAt: new Date()

    
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      console.log('action.payload', action.payload);
      console.log('state before', state);
      state.name = action.payload.name || "no  name";
    state.email = action.payload.email || "no  name";
    state.phone = action.payload?.phone || "no  name";
    state.auction = action.payload?.auction || [];
    state.balance = action.payload.balance || 200;
    state.role = action.payload.role || "no  name";
    state._id = action.payload._id || "no  name";
    state.createdAt = action.payload.createdAt || "no  name";
      console.log('state after', state);

    },
    addAuctiontoUser: (state, action: PayloadAction<string>) => {
      if (!state.auction) {
        state.auction = [];
      }

      state.auction.push(action.payload)
    },
    
  },
})

export const { addUser, addAuctiontoUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default userSlice.reducer