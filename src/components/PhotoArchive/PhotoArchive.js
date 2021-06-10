import React, { useState } from 'react'
import Nasapicture from "../Api/Nasapicture"

export default function PhotoArchive() {
    const [number, setNumber] = useState()
    return (
        <div className="justify-content-center align-items-center text-center">
            <label>How many random photos do you want?</label>
            <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
            {number && <Nasapicture isArchive={true} count={number}/>}
        </div>
        
    )
}
