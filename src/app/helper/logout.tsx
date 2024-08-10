

// import { useRouter } from "next/navigation";
import { googleSignOut } from "../auth/googleAuth";
import { NextResponse } from "next/server";


export const handleLogout = async () => {
   console.log("in logout")
    try {
      await googleSignOut();
      localStorage.setItem('user',JSON.stringify({}));
      localStorage.removeItem('user');
      NextResponse.redirect(new URL('/signIn'));
    //   router.push("/signIn"); // Redirect to sign-in page after sign out
    return "Success";
    } catch (error: any) {
      return error.message
    }
  };