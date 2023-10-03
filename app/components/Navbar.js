
"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../images/raise.png"
import { useRouter } from "next/navigation";

import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    // const { data } = useSession();
    // const router=useRouter();
    // console.log(data);

    // useEffect(() => {
    //   const pathname = router.pathname;
    //   if (data) {
    //     router.push('/home');
    //   } else {
    //     router.push('/login');
    //   }
    // }, [data]); 

    function userOverlay() {
        setVisible((pre) => !pre)
    }
    function userOverlay1() {
        setVisible(false)
    }

    return (
        <>

            <div className='nav-bar'>
                <div><b><h1 className='leave'>
                    <Image
                        className='user-img'
                        src={logo}

                        alt="Picture of the author"
                    />
                </h1></b></div>
                <div className='btn-parent'>
                    {1 ? <> <div><Link href='holiday'><button className='holiday-btn'>Holiday</button></Link></div>
                        <div><Link href='employee'><button className='emp-detail-btn'>Employee Details</button></Link></div>
                        <div><Link href='request'><button className='req-btn'>Requests</button></Link></div>
                        {/* <div><Link href='approve'><button className='approve-btn'>Approval List</button></Link></div> */}
                    </> : <>
                        <div><Link href='userHoliday'><button className='holiday-btn'>Holiday</button></Link></div>
                        {/* <div><Link href='applyLeave'><button className='req-btn'>Apply</button></Link></div> */}
                        <div><Link href='status'><button className='approve-btn'>Status</button></Link></div> </>}
                </div>
                <div className='icon'>
                    <i class="fa fa-user-circle" aria-hidden="true" onClick={userOverlay} ></i>
                    {/* <img src="/user1.png" alt="Your Image" width={70} height={70} className='user-img' /> */}
                </div>
            </div>
            {visible && <div className='overall-overlay' ><div className='overlay'>
                <button className='logout-btn'>Logout</button>


            </div>
            </div>}
        </>
    )
}

export default Navbar