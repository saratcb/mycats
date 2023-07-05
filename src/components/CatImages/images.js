import React, { useEffect, useState } from "react"
import {getImages, postToFavorites} from "../../api/service";
import './images.css';
import {GridImages, CatImage, StyledButton, StyledDiv} from "./style";
import { StyledH1 } from "../Typography/style";

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
    <>
    <StyledH1>Add images to your favorites</StyledH1>
    <GridImages>
        {images.map(image =>(
            <StyledDiv key = {image.id}>
                <CatImage src={image.url} alt={'cat'}/>
                <StyledButton onClick={() =>addToFav(image.id)}>Add to favs</StyledButton>
            </StyledDiv>
        ))}
    </GridImages>
    </>
    );

}
export default Images;