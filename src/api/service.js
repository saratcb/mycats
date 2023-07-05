import axios from 'axios';


const baseURL = 'https://api.thecatapi.com';
const apiKey = 'live_JZgsHkWmtGEOjFnv1U7syhJhF6c6XTOGyXoYoWR0zgLpUUj5odjyvW2phpacOHp0';

export function getRandomImage(){
    return axios.get(baseURL + '/v1/images/search');
}

export function getImages(){
    return axios.get(baseURL + '/v1/images/search?limit=10');
}

export function getImageById(id){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };
    return axios.get((baseURL + `/v1/images/${id}`),requestOptions);
}

export function getFavorites(){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };
    return axios.get((baseURL + '/v1/favourites'),requestOptions);
}

export function postToFavorites(image){
    const requestOptions = {
        headers: {
            "Content-Type":"application/json",
            "x-api-key": apiKey
        },
    };
    return axios.post((baseURL + '/v1/favourites'),{image_id:image}, requestOptions)
}

export function deleteFromFavorites(id){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
};
    return axios.delete((baseURL + `/v1/favourites/${id}`), requestOptions);
}
export function getMyImages(){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };
    return axios.get((baseURL + '/v1/images/upload'), requestOptions)
}

export function postImage(file){
    const formData = new FormData();
    formData.append('file',file);
    console.log(file)
    const requestOptions = {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-api-key": apiKey
        },
        body: formData
    };
    return axios.post((baseURL + '/v1/images/upload'),formData, requestOptions);
}

export function deleteImage(id){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };

    return axios.delete((baseURL + `/v1/images/${id}`), requestOptions)
}

export function voteUp(id){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };
    return axios.post((baseURL + '/v1/votes'), {value:1, image_id:id}, requestOptions);
}

export function voteDown(id){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };
    return axios.post((baseURL + '/v1/votes'), {value:0, image_id:id}, requestOptions);
}

export function getBreeds(){
    const requestOptions = {
        headers: {
            "x-api-key": apiKey
        },
    };
    return axios.get((baseURL + '/v1/breeds'),requestOptions);
}


