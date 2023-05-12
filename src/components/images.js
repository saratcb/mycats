import React, { useEffect, useState } from "react"
import {getImages, postToFavorites} from "./service";
import './images.css';

const Images = ()=>{
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    function addToFav(image){
        console.log(image);
        postToFavorites(image).catch(error=>{setError(error);
        });
    }

    useEffect(() =>{
        getImages().then((response)=>{
        setImages(response.data);
        }).catch(error=>{setError(error);
        });
    }, []);

    if(!images) return null;

    return (
    <div className = 'gridImages'>
        {images.map(image =>(
            <div key = {image.id}>
                <img src={image.url} alt={'cat'}/>
                <button onClick={() =>addToFav(image.id)}>Add to favs</button>
            </div>
        ))}
    </div>
    );

}
export default Images;