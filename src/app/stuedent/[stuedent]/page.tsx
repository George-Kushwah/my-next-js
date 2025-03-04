"use client"
import React from 'react'

export default function Studetails(params: any) {


    return (
    <div>
        <h3>Student Name here : <span style={{color:"Green"}}>{params.params.stuedent}</span></h3>
    
    </div>
  )
}
