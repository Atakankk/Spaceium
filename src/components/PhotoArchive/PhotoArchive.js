import React, { useState } from 'react'
import Nasapicture from "../Api/Nasapicture"
import { Alert } from "react-bootstrap"

export default function PhotoArchive() {
    const [number, setNumber] = useState()
    const [error, setError] = useState()

    const handleChange = (e) => {
        setError(null)
       if (e.target.value <= 100) {
            setNumber(e.target.value)
        }
        else {
            setError("You can't see more than 100 photos at a time.")
            setNumber(100)
        }
    }
    return (
        <div className="justify-content-center align-items-center text-center">
            <label>How many random photos do you want?</label>
            <input type="number" onChange={handleChange}></input>
            {error && <Alert variant="danger">{error}</Alert>}
            {number && <Nasapicture isArchive={true} count={number}/>}
        </div>
        
    )
}
