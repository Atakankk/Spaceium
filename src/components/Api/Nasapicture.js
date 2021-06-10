import React, { useEffect, useState} from 'react'
import { Col } from "react-bootstrap"

export default function Nasapicture(props) {
    const [archive, setArchive] = useState(props.isArchive)
    const [mainpagepicture, setMainPagePicture] = useState([])
    const [photoarchive, setPhotoArchive] = useState([])
    const MainPagePicture = useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=QWyjuZCN8vI9cIbXN0fXRSvcaK8n7OrkG73ODxhp&count=6").then(data => 
            data.json()
        ).then(data => setMainPagePicture(data))
        
    }, [])
    const PhotoArchivePicture = useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=QWyjuZCN8vI9cIbXN0fXRSvcaK8n7OrkG73ODxhp&count=${props.count}`).then(data => 
            data.json()
        ).then(data => setPhotoArchive(data))
    }, [props.count])
    
    return (
        <>
        {!archive && <Col>{mainpagepicture.map(picture => (
            <img src={picture.hdurl} width="400px" height="400px" className="m-2"></img>
            
        ))}</Col>}
        {archive && <Col>{photoarchive.map(picture => (
            <img src={picture.hdurl} width="400px" height="400px" className="m-2"></img>
            
        ))}</Col>}
        
            
        </>
    )
}
