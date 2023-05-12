import React, { useCallback, useEffect, useState } from "react"
import { getRandomImage, postToFavorites, voteUp, voteDown} from "./service";

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
        <div className='gridImages'>
            {randomImage.map(image=>(
                <div key = {image.id}>
            <img src={image.url} alt={'cat'}/>
            <button onClick={()=> selectVoteUp(image.id)}>Vote Up</button>
            <button onClick={()=> selectVoteDown(image.id)}>Vote down</button>
            <button onClick={() =>addToFav(image.id)}>Add to favs</button>
            </div>
            ))}
        </div>
    );
}
export default Vote;
