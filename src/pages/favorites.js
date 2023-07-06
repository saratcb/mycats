import { useEffect, useState } from "react"
import { deleteFromFavorites, getFavorites } from "../api/service";
import { CatImage, GridImages, ImageDiv, StyledButton } from "../style";
import heartbroken from "../img/heartbroken.png";
import VoteButton from "../components/VoteButton";

const Favorites = ()=>{
    const [favorites, setFavorites] = useState ([]);
    const [error, setError] = useState(false);

    function unFav(id){
        deleteFromFavorites(id).then((response)=>{
            const updatedFavorites = favorites.filter((favorite)=>favorite.id !== id);
            setFavorites(updatedFavorites);
            }).catch((errorResp)=>{
                setError(error.code); // 5005
            });
    };

    useEffect(()=>{
        getFavorites().then((response)=>{
            setFavorites(response.data);
        }).catch(error=>{setError(error);
        });
    }, []);

    if(!favorites) return (null);

    return (
    <GridImages>
        {favorites.map(favorite =>(
            <ImageDiv key = {favorite.id}>
                <CatImage src={favorite.image.url} alt={'cat'}/>
                <VoteButton onClick={() =>unFav(favorite.id)}
                            image={heartbroken}
                            alt="heartbroken"></VoteButton>
            </ImageDiv>
        ))}
    </GridImages>
    );
}
export default Favorites