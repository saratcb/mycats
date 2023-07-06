import React, { useCallback, useEffect, useState } from "react"
import { getRandomImage, postToFavorites, voteUp, voteDown} from "../api/service";
import { ButtonsDiv, CatImage, ImageDiv, StyledDiv, TryButton, VoteDownButton } from "../style";
import VoteButton from "../components/VoteButton";
import thumbsUp from "../img/upvote-icon.jpg";
import thumbsDown from "../img/downvote-icon.jpg";
import heart from "../img/heart.png";

const Vote =()=>{
    const [randomImage, setRandomImage] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        myfn()
    },[]);

    const myfn = useCallback(() => {
        getRandomImage().then((response)=>{
         setRandomImage(response.data);
        }).catch(error=>{setError(error);
        });
    }, [setRandomImage, setError])

    function selectVoteUp(id){
        voteUp(id).then(myfn()).catch(errorResp=>{setError(errorResp);
        });
    }

    function selectVoteDown(id){
        voteDown(id).then(myfn()).catch(errorResp=>{setError(errorResp);
        });
    }
    function addToFav(image){
        postToFavorites(image).catch(errorResp=>{setError(errorResp);
        });
    }

    if(!randomImage) return null;

    return(
        <StyledDiv>
            {randomImage.map(image=>(
                <ImageDiv key = {image.id}>
                    <CatImage src={image.url} alt={'cat'}/>
                    <ButtonsDiv>
                        <VoteButton onClick={()=> selectVoteUp(image.id)} 
                        image={thumbsUp}
                        alt="thumbs up"></VoteButton>
                        <VoteButton onClick={()=> selectVoteDown(image.id)}
                        image={thumbsDown}
                        alt="thumbs down"></VoteButton>
                        <VoteButton onClick={() =>addToFav(image.id)}
                        image={heart}
                        alt="heart"></VoteButton>
                    </ButtonsDiv>
                </ImageDiv>
            ))}
        </StyledDiv>
    );
}
export default Vote;
