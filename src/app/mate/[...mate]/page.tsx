"use client"
import React from 'react'

export default function Mate(params: any) {

    return (
    <div>
        <h3>Mate  Name here : <span style={{color:"Green"}}>{params.params.mate[0]}</span></h3>
        <h3>Mate  Name here : <span style={{color:"Green"}}>{params.params.mate[1]}</span></h3>
    </div>
  )
}