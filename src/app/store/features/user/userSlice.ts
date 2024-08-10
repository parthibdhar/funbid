import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface UserState {
  value: number;
  name:  string;
  email: string;
  phone: string;
  auction: string[];
}

// Define the initial state using that type
const initialState: UserState = {
    value: 0,
    name:  "",
    email: "",
    phone: "",
    auction: []
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      // state.value = action.payload.value
      // state.name = action.payload.name
      // state.email = action.payload.email
      // state.phone = action.payload.phone
      // state.auction = action.payload.auction
      return {...state,...action.payload}
    },
    addAuctiontoUser: (state, action: PayloadAction<string>) => {
      state.auction.push(action.payload)
    },
    
  },
})

export const { addUser, addAuctiontoUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default userSlice.reducer