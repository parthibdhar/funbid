import Image from "next/image";
import Link from "next/link";
// import "./page.module.css";
import "./globals.css"

export default function Home() {
  return (
    <>
      <Link href="./form">Form</Link>
      <Link href="./signUp">signup</Link>
      <Link href="./signIn">signin</Link>
      <Link href="./dashboard">dashboard</Link>
      <Link href="./admin/admiDasdhboard">admin</Link>
      <Link href="./admin/create-user"></Link>
      <Link href="./admin/edit-user/[id].tsx"></Link>
    </>
  );
}
