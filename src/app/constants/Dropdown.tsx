"use client"
import React, { useState } from 'react'
import Link from 'next/link';

import { MenuItem } from '../Layout/navBar/NavBar';
import { googleSignOut } from '../auth/googleAuth';
import { useRouter } from 'next/navigation';
import { handleLogout } from '../helper/logout';

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const menuItems = item?.children ? item.children : [];
    // const handleLogout = async () => {
    //     try {
    //       await googleSignOut();

    //       router.push('/signIn'); // Redirect to sign-in page after sign out
    //     } catch (error: any) {
    //       setError(error.message);
    //     }
    //   };

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative">
                <button
                    className="hover:text-text transitions"
                    onClick={toggle}
                >{item.title}</button>
                <div className={`absolute top-10 z-30 w-fit h-fit flex flex-col py-4 bg-subMain rounded-md ${transClass}`}>

                    {
                        menuItems.map(item =>
                            <Link
                                key={item.route}
                                className=" hover:bg-inputBg text-white hover:text-subText px-4 py-1 text-xl transitions"
                                href={item?.route || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                    <button 
                    onClick={handleLogout}
                    className=' hover:bg-inputBg text-white hover:text-subText px-3 py-1 text-xl transitions border-t-2 border-main'> Log out </button>
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}