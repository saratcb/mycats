import React, {useState} from "react";
import { postImage } from "./service"

const Upload = ()=>{
    const [selectedImage, setSelectedImage] = useState(null);
    const [myUploads, setMyUploads] = useState([]);
    const [error, setError] = useState(null);

    function handleFileSelected(event){
        event.preventDefault();
        setSelectedImage(event.target.files[0]);
    }


    function handleSubmit(){
        if(selectedImage){
        postImage(selectedImage).then((response)=>{
        setMyUploads((prevUploads) =>[...prevUploads, response.data]);
        setSelectedImage(null);
        })
        .catch(error=>{setError(error);});
        }
    }

    return (
    <div>
        <h2> Please make your upload</h2>
        <div onDrop={handleDrop} onDragOver={handleDragOver}>
            <input type="file" onChange={handleFileSelected}/>
            {selectedImage && <p>Selected Image</p>}
            <button onClick={handleSubmit}>Click to submit</button>   
        </div>
        {myUploads.length > 0 && (
        <div className="gridImages">
          <h3>My Uploads:</h3>
          {myUploads.map((upload) => (
            <img key={upload.id} src={upload.url} alt="uploaded" />
          ))}
        </div>
      )}
    </div>
    )

function handleDrop(){
    return null
}
function handleDragOver(){
}


}

export default Upload