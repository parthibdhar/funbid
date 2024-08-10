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
    const user = localStorage.getItem("user");
    // add initial  data
     storeRef.current.dispatch(addUser({
       value: 5,
       name: "",
       email: "",
       phone: "",
       auction: [
        "336454567h4e57htryu567", "336454567h4e57htryu567"
       ]
     }));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
