import Link from 'next/link'
import React from 'react'

export default function Listpage() {
const na:any=["Gunnu","George","Babulaal"]
    return (
    <div>
            <h3>List here</h3>
            {na.map((item: any, ind: any) => {
                return <p key={ind} style={{ cursor: "pointer", color: "blue" }}>
                    <Link href={`stuedent/${item}`}>{item}</Link>
                </p>
            })}
    </div>
  )
}
