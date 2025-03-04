"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navi() {
    const router:any=useRouter()
  return (
    <div>
            <Link href="/">Home</Link>
      <Link href="/About">About Page </Link>
      <button type="button" onClick={()=>router.push("/About")}>Click</button>
    </div>
  )
}
