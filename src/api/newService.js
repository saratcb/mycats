import axios from 'axios';


const baseURL = 'https://api.thecatapi.com';

export function getRandomImage(){
    return axios.get(baseURL + '/v1/images/search');
}

export function getImages(){
    return axios.get(baseURL + '/v1/images/search?limit=10');
}

export function getImageById(id){
    return axios.get(baseURL + `/v1/images/${id}`)
}

export function getFavorites(){
    return axios.get(baseURL + '/v1/favourites?api_key=live_JZgsHkWmtGEOjFnv1U7syhJhF6c6XTOGyXoYoWR0zgLpUUj5odjyvW2phpacOHp0')
}

export function postToFavorites(image){
    return axios.post((baseURL + '/v1/favourites?api_key=live_JZgsHkWmtGEOjFnv1U7syhJhF6c6XTOGyXoYoWR0zgLpUUj5odjyvW2phpacOHp0'), {image_id: image})
}

export function deleteFromFavorites(id){
    return axios.delete(baseURL + `/v1/favourites/${id}?api_key=live_JZgsHkWmtGEOjFnv1U7syhJhF6c6XTOGyXoYoWR0zgLpUUj5odjyvW2phpacOHp0`)
}

export function getMyImages(){
    return axios.get(baseURL + '/v1/images/upload')
}

export function postImage(file){
    const formData = new FormData();
    formData.append('file',file);
    console.log(file)
    const requestOptions = {
        headers: {"Content-Type": "multipart/form-data",
    }
}
    return axios.post((baseURL + '/v1/images/upload?api_key=live_JZgsHkWmtGEOjFnv1U7syhJhF6c6XTOGyXoYoWR0zgLpUUj5odjyvW2phpacOHp0'),formData, requestOptions);
}

export function deleteImage(id){

    return axios.delete(baseURL + `/v1/images/${id}`)
}



