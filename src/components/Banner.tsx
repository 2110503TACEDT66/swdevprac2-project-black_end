"use client";

import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


export default function Banner() {

  const router = useRouter();
  const {data:session} = useSession();  
  console.log(session?.user.token)


  return (
    <div
      className={styles.banner}
    >
      <div className={styles.bannerImg}>
        <Image
          src='/img/cover.jpg'
          alt="cover"
          fill={true}
          objectFit="cover"
        />
        <div className={styles.bannerText}>
          <h1 className="text-4xl">Online Job Fair Registration</h1>
          <h3 className="text-xl font-serif ">Unlock Your Potential and Secure Your Dream Job - Register Now!</h3>
        </div>
        {
          session? <div className="z-30 absolute top-5 right-10 font-semibold 
          text-rose-500 text-xl bg-rose-200 hover:bg-rose-100 rounded-lg p-2 transition transform duration-200 ease hover:-translate-y-2">
             Welcome {session.user?.name} </div>:null
            
        }
        <button
          className="bg-white text-indigo-600 border border-indigo-600 
        font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
        hover:bg-indigo-600 hover:text-white hover:border-transparent"
          onClick={(e) => {
            e.stopPropagation();
            router.push("/company");
          }}
        >
          Select Company you wanna join
        </button>
      </div>
    </div>
  );
}
