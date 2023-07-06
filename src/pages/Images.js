import React, { useEffect, useState } from "react"
import {getImages, postToFavorites} from "../api/service";
import {GridImages, CatImage, StyledButton, ImageDiv,StyledDiv} from "../style";
import { StyledH1 } from "../components/Typography/style";
import heart from "../img/heart.png";
import VoteButton from "../components/VoteButton";


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
    <StyledDiv>
    <StyledH1>Add images to your favorites</StyledH1>
    <GridImages>
        {images.map(image =>(
            <ImageDiv key = {image.id}>
                <CatImage src={image.url} alt={'cat'}/>
                <VoteButton onClick={() =>addToFav(image.id)}
                            image={heart}
                            alt="heart"></VoteButton>
            </ImageDiv>
        ))}
    </GridImages>
    </StyledDiv>
    );

}
export default Images;