import { useEffect, useState } from "react"
import { deleteFromFavorites, getFavorites } from "../api/service";
import '../components/CatImages/images.css';

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
    <div className = 'gridImages'>
        {favorites.map(favorite =>(
            <div key = {favorite.id}>
                <img src={favorite.image.url} alt={'cat'}/>
                <button onClick={() =>unFav(favorite.id)}>Unfav</button>
            </div>
        ))}
    </div>
    );
}
export default Favorites