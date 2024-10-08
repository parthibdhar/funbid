"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store/store";
import { addUser } from "./store/features/user/userSlice";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
   
    // add initial  data
    //  storeRef.current.dispatch(addUser({
    //    name: "",
    //    email: "", 
    //    phone: "",
    //    balance: 0,
    //    role: "",
    //    auction: []
    //  }));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
