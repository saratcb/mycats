import React, { useEffect, useState } from "react";
import { getBreeds, getImageById } from "./service";
import './images.css';

const Breeds = ()=>{
    const [breeds, setBreeds] = useState([]);
    const [error, setError] = useState(null);
    const [selectedBreed, setSelectedBreed] = useState('')

    useEffect(()=>{
        getBreeds().then((response)=>{



            setBreeds(response.data);


            
        }).catch(errorResp =>{setError(errorResp);
        });
    }, []);

    const handleSelectedBreed = (event)=>{
        setSelectedBreed(breeds.find((breed)=>breed.id === event.target.value));
    };

    const selectBreedImage = (id)=>{
       getImageById(id).then((response)=>{
            return response.data.url;}).catch(errorResp=>{setError(errorResp);
        });
    };

    if(!breeds) return null;

    return(
        <div>
            <select value = {selectedBreed} onChange={handleSelectedBreed}>
                <option value="">Select a breed</option>
                {breeds.map(breed =>(
                    <option key={breed.id} value={breed.id}>{breed.name}</option>))}
            </select>
            {selectedBreed && (
                <div className="breed">
                    <img src = {selectBreedImage(selectedBreed.reference_image_id)} alt={'cat'}/>
                    <h1>{selectedBreed.name}</h1>
                    <h2>{selectedBreed.id}</h2>
                    <p>{selectedBreed.temperament}</p>
                    <p>{selectedBreed.description}</p>
                    <p>{selectedBreed.origin}</p>
                    <p>{selectedBreed.weight.metric} kgs</p>
                    <p>{selectedBreed.life_span} average life span</p>
                </div>
            )}
        </div>
          
    )


}

export default Breeds;