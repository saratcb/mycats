import React, { useEffect, useState } from "react";
import { getBreeds, getImageById } from "../api/service";
import "../index.css";
import { CatImage } from "../style";

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    getBreeds()
      .then((response) => {
        const breedsWithImages = response.data;
        const promises = breedsWithImages.map((breed) =>
          selectBreedImage(breed.reference_image_id)
            .then((imageUrl) => {
              breed.image = imageUrl;
            })
            .catch((errorResp) => {
              setError(errorResp);
            })
        );

        Promise.all(promises)
          .then(() => {
            setBreeds(breedsWithImages);
          })
          .catch((errorResp) => {
            setError(errorResp);
          });
      })
      .catch((errorResp) => {
        setError(errorResp);
      });
  }, []);

  const handleSelectedBreed = (event) => {
    setSelectedBreed(breeds.find((breed) => breed.id === event.target.value));
  };

  const selectBreedImage = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        getImageById(id)
          .then((response) => {
            resolve(response.data.url);
          })
          .catch((errorResp) => {
            setError(errorResp);
            reject(errorResp);
          });
      }, 1000); 
    });
  };

  if (!breeds) return null;

  return (
    <div>
      <select value={selectedBreed} onChange={handleSelectedBreed}>
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      {selectedBreed && (
        <div className="breed">
          <CatImage src={selectedBreed.image} alt={"cat"} />
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
  );
};

export default Breeds;
