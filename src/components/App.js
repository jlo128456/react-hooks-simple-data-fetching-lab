// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null); //state for the dog image
    const [loading, setLoading] =useState(true); //state for loading
    
    useEffect(() => {
    //fetch a dog image via API
      fetch("https://dog.ceo/api/breeds/image/random")
         .then((respone) => respone.json())
         .then((data) => {
            setDogImage(data.message);
            setLoading(false);
        })
        .catch((error) => console.error("Error fetching the dog image:", error));
    }, []);
    
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
               <img src={dogImage} alt="A Random Dog" />
            )}        
        </div>
    );
}

export default App
